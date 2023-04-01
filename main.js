const orderName = document.getElementById('order-name');
const tbodyOrder = document.getElementById('tbody-order')
const orderAdd = document.getElementById('order-add');
const ordered = document.getElementById('ordered');
const orderedTotal = document.getElementById('ordered-total');
const orderedReset = document.getElementById('ordered-reset');
const addLikeEffect = document.getElementById('add-like-effect');
const like = document.getElementById('like');
const likeCounter = document.getElementById('like-counter')
const likeCounterAll = document.getElementById('like-counter-all')
const likeCounterPersonal = document.getElementById('like-counter-personal')
const transportModes = document.getElementById('transport-modes')
const maxCapacityInfo = document.getElementById('max-capacity')
const orderedTable = document.getElementById('ordered-table')


const inputXL = document.getElementById("xl-input");
const inputL = document.getElementById("l-input");
const inputM = document.getElementById("m-input");
const inputS = document.getElementById("s-input");

const transportContainerInfo = document.getElementById("transport-container-info");
const actualCapacity = document.getElementById("actual-capacity")


window.onload = () => {
    render()
    updateLike(0)
    transportMode()
    inputXL.addEventListener("keypress", (event) => {
        event.preventDefault();
    });

    inputL.addEventListener("keypress", (event) => {
        event.preventDefault();
    });

    inputM.addEventListener("keypress", (event) => {
        event.preventDefault();
    });

    inputS.addEventListener("keypress", (event) => {
        event.preventDefault();
    });

}

function inc(element) {
    let el = document.querySelector(`[name="${element}"]`);
    if (parseInt(el.value) < 99) {
        el.value = parseInt(el.value) + 1;
        calcSize()
        playSound('add')
    } else {
        playSound('error')
    }
}

function dec(element) {
    let el = document.querySelector(`[name="${element}"]`);
    if (parseInt(el.value) > 0) {
        el.value = parseInt(el.value) - 1;
        calcSize()
        playSound('remove')
    } else {
        playSound('error')
    }
}

// Transport Mode
function transportMode() {
    transport.forEach(mode => {
        let option = document.createElement('option')
        option.value = mode.id
        option.innerHTML = `${mode.name}`
        transportModes.appendChild(option)
    })
}

function calcSize() {

    let countXL = inputXL.value > 0 ? inputXL.value * 6 : 0;
    let countL = inputL.value > 0 ? inputL.value * 4 : 0;
    let countM = inputM.value > 0 ? inputM.value * 2 : 0;
    let countS = inputS.value > 0 ? inputS.value * 1 : 0;

    actualCapacity.innerHTML = countXL + countL + countM + countS;
}

transportModes.addEventListener('change', (event) => {
    transportContainerInfo.innerHTML = '';
    let arrayCapacity = transport[event.target.value - 1].capacityBox;
    let maxCapacity = 0
    arrayCapacity.forEach(container => {
        maxCapacity += container.capacity
        let tr = document.createElement('tr')
        tr.innerHTML = `
                <td>${container.name}</td>
                <td>${container.capacity}</td>
                <td>${container.maxWeight}</td>`
        transportContainerInfo.appendChild(tr)
    })

    maxCapacityInfo.innerHTML = maxCapacity;
});

// Order logic
function checkDiff(rawValue1, rawValue2) {
    if (isNaN(rawValue1) || isNaN(rawValue2)) {
        return 0
    }
    let value1 = parseInt(rawValue1, 10);
    let value2 = parseInt(rawValue2, 10);
    if (value1 < value2) {
        return value2 - value1;
    } else {
        return 0
    }
}

function allocate(material, quantity) {
    let box = material.split
    let index = box.length - 1;
    let boxToLoad = []
    let minusContainerQuantity = box[0].quantity
    let quantityAllocated = 0;
    while (quantityAllocated < quantity) {
        if ((quantity - quantityAllocated - box[index].quantity > -minusContainerQuantity) || (index === 0)) {
            quantityAllocated += box[index].quantity;
            boxToLoad.push(box[index])
        } else {
            index--
        }
    }
    return boxToLoad
}

function deliveryInfo(containers) {
    let totalQuantity = 0
    let totalWeight = 0
    let totalSpace = 0
    let totalSizeType = {s: 0, m: 0, l: 0, xl: 0}
    containers.forEach(container => {
        totalQuantity += container.quantity;
        totalWeight += container.weight;
        totalSpace += container.size.space
        if (container.size.name === 'S') {
            totalSizeType.s++
        } else if (container.size.name === 'M') {
            totalSizeType.m++
        } else if (container.size.name === 'L') {
            totalSizeType.l++
        } else if (container.size.name === 'XL') {
            totalSizeType.xl++
        }
    })
    return [{totalWeight: totalWeight, totalSpace: totalSpace, totalSizeType: totalSizeType}, totalQuantity]
}

function save(rawOrder) {
    let order = {
        name: rawOrder[0],
        materials: [{
            name: 'crystals',
            containers: [],
            neededQuantity: rawOrder[1],
            totalQuantity: rawOrder[1],
            info: {
                totalWeight: 0,
                totalSpace: 0,
                totalSizeType: {s: 0, m: 0, l: 0, xl: 0},
            }
        }, {
            name: 'resins',
            containers: allocate(materials[1], rawOrder[2]),
            neededQuantity: rawOrder[2],
            totalQuantity: deliveryInfo(allocate(materials[1], rawOrder[2]))[1],
            info: deliveryInfo(allocate(materials[1], rawOrder[2]))[0]
        }, {
            name: 'metals',
            containers: allocate(materials[2], rawOrder[3]),
            neededQuantity: rawOrder[3],
            totalQuantity: deliveryInfo(allocate(materials[2], rawOrder[3]))[1],
            info: deliveryInfo(allocate(materials[2], rawOrder[3]))[0]
        }, {
            name: 'ceramics',
            containers: allocate(materials[3], rawOrder[4]),
            neededQuantity: rawOrder[4],
            totalQuantity: deliveryInfo(allocate(materials[3], rawOrder[4]))[1],
            info: deliveryInfo(allocate(materials[3], rawOrder[4]))[0]
        }, {
            name: 'chemicals',
            containers: allocate(materials[4], rawOrder[5]),
            neededQuantity: rawOrder[5],
            totalQuantity: deliveryInfo(allocate(materials[4], rawOrder[5]))[1],
            info: deliveryInfo(allocate(materials[4], rawOrder[5]))[0]
        }, {
            name: 'alloys',
            containers: allocate(materials[5], rawOrder[6]),
            neededQuantity: rawOrder[6],
            totalQuantity: deliveryInfo(allocate(materials[5], rawOrder[6]))[1],
            info: deliveryInfo(allocate(materials[5], rawOrder[6]))[0]
        }], totalWeight: 0, totalSizeType: {
            s: 0, m: 0, l: 0, xl: 0
        }
    }

    let lastOrders = JSON.parse(localStorage.getItem('orders'))
    if (lastOrders === undefined || lastOrders === null) {
        localStorage.setItem('orders', JSON.stringify([]));
        lastOrders = []
    }

    let newOrder = {
        id: 1, orderInfo: order
    }

    if (lastOrders.length !== 0) {
        newOrder = {
            id: lastOrders[lastOrders.length - 1].id + 1, orderInfo: order
        }
    }

    let totalWeight = 0
    let totalSizeType = {
        s: 0, m: 0, l: 0, xl: 0
    }

    newOrder.orderInfo.materials.forEach(material => {
        totalWeight += material.info.totalWeight
        totalSizeType.s += material.info.totalSizeType.s
        totalSizeType.m += material.info.totalSizeType.m
        totalSizeType.l += material.info.totalSizeType.l
        totalSizeType.xl += material.info.totalSizeType.xl
    })

    newOrder.orderInfo.name = (newOrder.orderInfo.name === '' || newOrder.orderInfo.name === null || newOrder.orderInfo.name === undefined) ? `n°${newOrder.id}` : newOrder.orderInfo.name
    newOrder.orderInfo.totalWeight = totalWeight
    newOrder.orderInfo.totalSizeType = totalSizeType

    lastOrders.push(newOrder)
    localStorage.setItem('orders', JSON.stringify(lastOrders));
}

function deleteRow(id) {
    playSound('remove')
    setTimeout(() => {
        let orders = JSON.parse(localStorage.getItem('orders'))

        orders.splice(orders.indexOf(orders.find(order => order.id === id)), 1)

        localStorage.setItem('orders', JSON.stringify(orders));

        render()


    }, 20)
}


function render() {
    let orders = JSON.parse(localStorage.getItem('orders'))
    if (orders !== null) {

        ordered.innerHTML = orders.length === 0 ? `
            <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td class="cell-no-border"></td>
            </tr>
        ` : ``;


        let totalWeight = 0, totalCrystals = 0, totalResins = 0, totalMetals = 0, totalCeramics = 0, totalChemicals = 0,
            totalAlloys = 0
        let totalSizeType = {
            s: 0, m: 0, l: 0, xl: 0
        }


        const spanSizeFormat = (obj) => {
            let spanSize = ``;
            Object.keys(obj).forEach(key => {
                spanSize += obj[key] > 0 ? `
                    <div class="d-flex-c">${obj[key]}
                        <span class="x"> \t&#xD7;</span>
                        <span class="badge-size">${key.toUpperCase()}</span>
                    </div>
                ` : ``;
            })
            return spanSize === `` ? `...` : spanSize;
        };

        orders.forEach(order => {
            totalWeight += order.orderInfo.totalWeight
            totalSizeType.s += order.orderInfo.totalSizeType.s
            totalSizeType.m += order.orderInfo.totalSizeType.m
            totalSizeType.l += order.orderInfo.totalSizeType.l
            totalSizeType.xl += order.orderInfo.totalSizeType.xl
            totalCrystals += order.orderInfo.materials[0].totalQuantity
            totalResins += order.orderInfo.materials[1].totalQuantity
            totalMetals += order.orderInfo.materials[2].totalQuantity
            totalCeramics += order.orderInfo.materials[3].totalQuantity
            totalChemicals += order.orderInfo.materials[4].totalQuantity
            totalAlloys += order.orderInfo.materials[5].totalQuantity


            let tr = document.createElement('tr')
            let html = `<tr> <td>${order.orderInfo.name}</td>`;

            order.orderInfo.materials.forEach(material => {
                html += `<td>`
                if (material.neededQuantity === 0) {
                    html += `...`
                } else if (material.containers.length === 0) {
                    html += `<span class="c-success">${material.neededQuantity}</span>`
                } else {
                    html += `<span class="c-warning">[ `


                    const answer = Object.values(material.containers.reduce((p, v) => {
                        const old = p[v.quantity];
                        if (!old)
                            p[v.quantity] = {...v, count: 1};
                        else if (old.sort > v.sort)
                            p[v.quantity] = {...v, count: old.count + 1};
                        else
                            p[v.quantity].count++;
                        return p;
                    }, {})).reverse();

                    let index = answer.length - 1;
                    answer.forEach(container => {
                        if (container.count === 1) {
                            html += `${container.quantity}`
                        } else {
                            html += `${container.quantity}<span class="c-alert">&#xD7;${container.count}</span>`
                        }
                        if (index > 0) {
                            html += ` + `
                            index--
                        }
                    })
                    html += ` ]</span>`
                    html += `<span class="c-success"> ${material.totalQuantity}</span>`
                    let diff = material.totalQuantity - material.neededQuantity;
                    if (diff > 0) {
                        html += ` / <span class="c-alert">-${diff}</span>`
                    }
                }
                html += `</td>`
            })
            html += `<td><span class="c-warning">${order.orderInfo.totalWeight}</span></td>`


            const spanSize = spanSizeFormat(order.orderInfo.totalSizeType);

            html += `<td><div class="d-flex-c-wrap">${spanSize}</div></td>`
            html += `<td class="cell-no-border"><button class="bg-alert cell-btn" onclick="deleteRow(${order.id})">Delete</button></td>`
            html += `</tr>`
            tr.innerHTML = html
            ordered.appendChild(tr)
        })

        const spanSize = spanSizeFormat(totalSizeType);

        function zeroOrNot(value) {
            return value === 0 ? `...` : `<span class="c-success">${value}</span>`
        }


        /*

                */


        orderedTotal.innerHTML = `
            <td class="bg-blue c-bg">Total ➔</td>
            <td>${zeroOrNot(totalCrystals)}</td>
            <td>${zeroOrNot(totalResins)}</td>
            <td>${zeroOrNot(totalMetals)}</td>
            <td>${zeroOrNot(totalCeramics)}</td>
            <td>${zeroOrNot(totalChemicals)}</td>
            <td>${zeroOrNot(totalAlloys)}</td>
            <td><span class="c-warning">${totalWeight}</span></td>
            <td><div class="d-flex-c">${spanSize}</div></td>
            <td class="cell-no-border"></td>
        `;

        function show_hide_column( col_no, do_show ){
            const table  = document.getElementById( 'ordered-table' )
            const column = table.getElementsByTagName( 'col' )[col_no]
            if ( column ){
                column.style.visibility = do_show?"":"collapse";
            }
        }

        for (let i = 0; i < orderedTotal.children.length; i++) {
            console.log(i)
            orderedTotal.children[i].innerText === '...' ? show_hide_column(i,false) : show_hide_column(i,true);
        }
    }
}

function validInput(value) {
    return !(value > 9999 || value < 0 || isNaN(value) || value === "");
}

transportModes.addEventListener('click', () => {
    playSound('nav')
})
orderAdd.addEventListener('click', () => {
    let error = false
    let countDiffZero = 0
    let rawOrder = [orderName.value]
    for (const child of tbodyOrder.children) {
        let inputNeeded = child.children[2].children[0].value;
        let inputDelivered = child.children[1].children[0].value;

        if (validInput(inputNeeded) && validInput(inputDelivered)) {
            rawOrder.push(checkDiff(inputDelivered, inputNeeded))

            if (parseInt(inputNeeded, 10) - parseInt(inputDelivered, 10) > 0) {
                countDiffZero++
            }
        } else {
            error = true;
        }
    }
    if (error || countDiffZero === 0) {
        playSound('error')
    } else {
        playSound('add')
        setTimeout(() => {
            save(rawOrder)
            render()
        })
    }
});
orderedReset.addEventListener('click', () => {
    playSound('reset')
    setTimeout(() => {
        localStorage.removeItem('orders');
        ordered.innerHTML = `
        <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td class="cell-no-border"></td>
        </tr>
        `;
        orderedTotal.innerHTML = `<td class="bg-blue c-bg">Total ➔</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td class="cell-no-border"></td>`;
    }, 150)
});

like.addEventListener('click', () => {
    addLike()
});

// Ajout de span pour les effets de points
function addLike() {
    var newSpan = document.createElement("span");
    newSpan.innerHTML = "+1";
    newSpan.setAttribute("class", "like-effect c-blue");
    addLikeEffect.append(newSpan);
    setTimeout(() => {
        newSpan.remove()
    }, 1000)

    playSound('like')
    setTimeout(() => {
        updateLike(1)
    }, 950)
}

function playSound(name) {
    let audio = new Audio(`assets/sound/${name}.mp3`);
    audio.volume = 0.12;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function updateLike(nbPoint) {
    let likeCounterPersonalValue = JSON.parse(localStorage.getItem('likeCounterPersonal'))
    if (likeCounterPersonalValue == null || likeCounterPersonalValue < 0) {
        localStorage.setItem('likeCounterPersonal', JSON.stringify(0));
        likeCounterPersonal.innerHTML = nbPoint
    } else {
        likeCounterPersonalValue = likeCounterPersonalValue + nbPoint
        localStorage.setItem('likeCounterPersonal', JSON.stringify(likeCounterPersonalValue));
        likeCounterPersonal.innerHTML = likeCounterPersonalValue
    }
}
