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
        <h1>
            Death-Stranding<span>Easy-Shipment</span>
        </h1>
    </div>
    <div id="like-zone">
        <div id="like-counter">00000</div>
        <div id="add-like-effect"></div>
        <button id="like" class="bg-blue"><img src="assets/img/like.png"></button>
    </div>
</header>
<main>
    <div class="d-flex">
        <table>
            <thead>
            <tr>
                <th colspan="3">Order</th>
            </tr>
            <tr>
                <th colspan="1">Order name</th>
                <td colspan="2"><input id="order-name" class="txt-align-l" type="text" maxlength="30"
                                       placeholder="Name"></td>
            </tr>
            <tr>
                <th>Name</th>
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
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Chiral crystals</th>
            <th>Resins</th>
            <th>Metals</th>
            <th>Ceramics</th>
            <th>Chemicals</th>
            <th>Special alloys</th>
            <th style="">
                <button id="ordered-reset" class="bg-blue cell-btn">Reset</button>
            </th>
        </tr>
        </thead>
        <tbody id="ordered">

        </tbody>
    </table>
</main>
<footer>

</footer>
<script src="main.js"></script>
<script src="modules/data.js"></script>
</body>
</html>
