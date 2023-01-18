<?php
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Death Stranding - Delivery Loadout</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allerta+Stencil">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed">
    <link rel="stylesheet" href="assets/styles.css">

</head>
<body>
<header>
    <div id="logo">
        <span>Death-Stranding</span>
        <span>Easy-Shipment</span>
    </div>
    <hr>
</header>
<main>
    <div style="display: flex; justify-content: space-between;">
        <div>
            <table id="order-table">
                <thead>
                <tr>
                    <th colspan="3" class="cell-no-border">New Order</th>
                </tr>
                <tr>
                    <th colspan="1">Order name</th>
                    <td colspan="2"><input id="order-name" class="txt-align-l" type="text" maxlength="30"
                                           placeholder="Name"></td>
                </tr>
                <tr>
                    <th>Material</th>
                    <th>Delivered</th>
                    <th>Needed</th>
                </tr>
                </thead>
                <tbody id="tbody-order">
                <tr>
                    <td class="txt-align-c">Chiral crystals</td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                </tr>
                <tr>
                    <td class="txt-align-c">Resins</td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                </tr>
                <tr>
                    <td class="txt-align-c">Metals</td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                </tr>
                <tr>
                    <td class="txt-align-c">Ceramics</td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                </tr>
                <tr>
                    <td class="txt-align-c">Chemicals</td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                </tr>
                <tr>
                    <td class="txt-align-c">Special alloys</td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                    <td class="p-0"><input onClick="this.select();" type="number" min="0" max="9999" value="0"></td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td class="txt-align-c border-none"><span id="arrow-add">➔</span></td>
                    <td colspan="2" class="txt-align-c border-none">
                        <button id="order-add" class="bg-success cell-btn">Add</button>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
        <div style="display: flex; justify-content: space-between;">
            <div>
                <table>
                    <thead>
                    <tr>
                        <th colspan="3" class="cell-no-border">Kind of transport</th>
                    </tr>
                    <tr>
                        <th class="p-0" style="width: 10rem">
                            <select id="transport-modes">
                                <option value="" disable hidden>Please choose an option</option>
                            </select>
                        </th>
                        <th style="width: 5rem">Capacity</th>
                        <th style="width: 5rem">Weight</th>
                    </tr>
                    </thead>
                    <tbody id="transport-container-info">

                    </tbody>
                    <tfoot>
                    <tr>
                        <td class="bg-warning c-bg">Total Capacity</td>
                        <td id="max-capacity">0</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
            <div>
                <table id="size-table">
                    <thead>
                    <tr>
                        <th colspan="2" class="cell-no-border">Size type</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="d-flex-c">The <span class="badge-size">XL</span> size take 6 capacity</td>
                        <td class="p-0"><div class="d-flex-c"><input id="xl-input" name="xl-input" type="number" min="0" max="99" value="0" readonly><div class="d-flex-col"><button class="btn-inc" onclick="inc('xl-input')"></button><button class="btn-dec" onclick="dec('xl-input')"></button></div></div></td>
                    </tr>
                    <tr>
                        <td class="d-flex-c">The <span class="badge-size">L</span> size take 4 capacity</td>
                        <td class="p-0"><div class="d-flex-c"><input id="l-input" name="l-input" type="number" min="0" max="99" value="0" readonly><div class="d-flex-col"><button class="btn-inc" onclick="inc('l-input')"></button><button class="btn-dec" onclick="dec('l-input')"></button></div></div></td>
                    </tr>
                    <tr>
                        <td class="d-flex-c">The <span class="badge-size">M</span> size take 2 capacity</td>
                        <td class="p-0"><div class="d-flex-c"><input id="m-input" name="m-input" type="number" min="0" max="99" value="0" readonly><div class="d-flex-col"><button class="btn-inc" onclick="inc('m-input')"></button><button class="btn-dec" onclick="dec('m-input')"></button></div></div></td>
                    </tr>
                    <tr>
                        <td class="d-flex-c">The <span class="badge-size">S</span> size take 1 capacity</td>
                        <td class="p-0"><div class="d-flex-c"><input id="s-input" name="s-input" type="number" min="0" max="99" value="0" readonly><div class="d-flex-col"><button class="btn-inc" onclick="inc('s-input')"></button><button class="btn-dec" onclick="dec('s-input')"></button></div></div></td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td class="bg-warning c-bg">Total Capacity</td>
                        <td id="actual-capacity">0</td>

                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <table>
        <thead>
        <tr class="table-head">
            <th>Order</th>
            <th>Chiral crystals</th>
            <th>Resins</th>
            <th>Metals</th>
            <th>Ceramics</th>
            <th>Chemicals</th>
            <th>Special alloys</th>
            <th>Total Weight</th>
            <th>Total Size Type</th>
            <th class="bg-bg cell-no-border">
                <button id="ordered-reset" class="bg-blue cell-btn">Reset</button>
            </th>
        </tr>
        </thead>
        <tbody id="ordered"></tbody>
        <tfoot>
        <tr id="ordered-total">
            <td class="bg-blue c-bg">Total ➔</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
        </tr>
        </tfoot>
    </table>
    <div id="like-zone">
        <div id="like-counter"><span id="like-counter-all">0</span><span id="like-counter-personal">0</span></div>
        <div id="add-like-effect"></div>
        <button id="like" class="bg-blue"><img src="assets/img/like.png"></button>
    </div>
</main>
<footer>
    <hr>
    <div>
    </div>
</footer>
<script src="main.js"></script>
<script src="modules/data.js"></script>
</body>
</html>
