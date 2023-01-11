let orderName = document.getElementById('order-name');
let tbodyOrder = document.getElementById('tbody-order')
let orderAdd = document.getElementById('order-add');
let ordered = document.getElementById('ordered');
let orderedReset = document.getElementById('ordered-reset');
let addLikeEffect = document.getElementById('add-like-effect');
let like = document.getElementById('like');
let likeCounter = document.getElementById('like-counter')


window.onload = () => {
    render()
    updateLike(0)
}

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
    let quantityAllocated = 0;
    while (quantityAllocated < quantity) {
        if ((quantity - quantityAllocated > box[index].quantity) || (index == 0)) {
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
        if (container.size.name == 'S') {
            totalSizeType.s++
        } else if (container.size.name == 'M') {
            totalSizeType.m++
        } else if (container.size.name == 'L') {
            totalSizeType.l++
        } else if (container.size.name == 'XL') {
            totalSizeType.xl++
        }
    })
    return {
        totalQuantity: totalQuantity,
        totalWeight: totalWeight,
        totalSpace: totalSpace,
        totalSizeType: totalSizeType
    }
}

function save(order) {
    let lastOrders = JSON.parse(localStorage.getItem('orders'))
    if (lastOrders == null || lastOrders.length === 0) {
        localStorage.setItem('orders', JSON.stringify([{
            id: 1,
            orderInfo: order
        }]));
    } else {
        let data = lastOrders
        data.push({
            id: data[data.length - 1].id + 1,
            orderInfo: order
        })
        localStorage.setItem('orders', JSON.stringify(data));
    }
}

function deleteRow(id) {
    playSound('remove')
    setTimeout(() => {
        let orders = JSON.parse(localStorage.getItem('orders'))
        let indexCount = 0
        orders.forEach(order => {
            if (order.id === id) {
                let data = orders.splice(indexCount, 1)
                localStorage.setItem('orders', JSON.stringify(orders));
                render()
            }
            indexCount++
        })
    }, 20)
}


function render() {
    let orders = JSON.parse(localStorage.getItem('orders'))
    if (orders !== null) {
        ordered.innerHTML = '';


        orders.forEach(order => {
            let orderName = (order.orderInfo.name === '' || order.orderInfo.name === null || order.orderInfo.name === undefined) ? `n°${order.id}` : order.orderInfo.name
            let tr = document.createElement('tr')
            let html = `<tr> <td>${orderName}</td>`;
            order.orderInfo.materials.forEach(material => {
                html += `<td>`

                if (material.neededQuantity === 0) {
                    html += `...`
                } else if (material.containers.length === 0) {
                    html += `<span class="c-success">${material.neededQuantity}</span>`
                } else {
                    let index = material.containers.length - 1
                    material.containers.forEach(container => {
                        html += `<span class="c-success">${container.quantity}`
                        if (index > 0) {
                            html += `+`
                        }
                        html += `</span>`
                        index--
                    })
                    let neededQuantity = material.neededQuantity
                    let totalQuantity = material.info.totalQuantity
                    let diff = totalQuantity - neededQuantity;

                    if (diff > 0) {
                        html += ` / <span class="c-alert">-${diff}</span>`
                    }
                }

                html += `</td>`
            })
            html += `<td><button id="ordered-reset" class="bg-alert cell-btn" onclick="deleteRow(${order.id})">Delete</button></td>`
            html += `</tr>`
            tr.innerHTML = html
            ordered.appendChild(tr)
        })
    }
}

orderAdd.addEventListener('click', (event) => {
    playSound('add')
    setTimeout(() => {
        let rawOrder = [orderName.value]
        for (const child of tbodyOrder.children) {

            rawOrder.push(checkDiff(child.children[1].children[0].value, child.children[2].children[0].value))
        }
        let order = {
            name: rawOrder[0],
            materials: [
                {
                    name: 'crystals',
                    containers: [],
                    neededQuantity: rawOrder[1],
                    info: {
                        totalQuantity: rawOrder[1],
                        totalWeight: 0,
                        totalSpace: 0,
                        totalSizeType: {s: 0, m: 0, l: 0, xl: 0}
                    }
                },
                {
                    name: 'resins',
                    containers: allocate(materials[1], rawOrder[2]),
                    neededQuantity: rawOrder[2],
                    info: deliveryInfo(allocate(materials[1], rawOrder[2]))
                },
                {
                    name: 'metals',
                    containers: allocate(materials[2], rawOrder[3]),
                    neededQuantity: rawOrder[3],
                    info: deliveryInfo(allocate(materials[2], rawOrder[3]))
                },
                {
                    name: 'ceramics',
                    containers: allocate(materials[3], rawOrder[4]),
                    neededQuantity: rawOrder[4],
                    info: deliveryInfo(allocate(materials[3], rawOrder[4]))
                },
                {
                    name: 'chemicals',
                    containers: allocate(materials[4], rawOrder[5]),
                    neededQuantity: rawOrder[5],
                    info: deliveryInfo(allocate(materials[4], rawOrder[5]))
                },
                {
                    name: 'alloys',
                    containers: allocate(materials[5], rawOrder[6]),
                    neededQuantity: rawOrder[6],
                    info: deliveryInfo(allocate(materials[5], rawOrder[6]))
                },
            ]

        }
        save(order)
        render()
    }, 150)
});
orderedReset.addEventListener('click', (event) => {
    playSound('reset')
    setTimeout(() => {
        localStorage.removeItem('orders');
        ordered.innerHTML = "";
    }, 150)

});


like.addEventListener('click', (event) => {
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
    setTimeout(() => {
    }, 100)
}


function updateLike(nbPoint) {
    let likeCounterValue = JSON.parse(localStorage.getItem('likeCounter'))
    if (likeCounterValue == null || likeCounterValue < 0) {
        localStorage.setItem('likeCounter', JSON.stringify(0));
        likeCounter.innerHTML = nbPoint
    } else {
        likeCounterValue = likeCounterValue + nbPoint
        localStorage.setItem('likeCounter', JSON.stringify(likeCounterValue));
        likeCounter.innerHTML = likeCounterValue
    }


}



