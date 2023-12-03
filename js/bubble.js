<!doctype html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CS171 - Term Project &amp; Invest Real Estate</title>

    <!-- Load CSS libraries -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">

</head>

<body class="background-image">
<!--<body>-->

<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>Diversification is key to outperformance over time</h1>
            <!-- subtitle heading-->
            <h2 id="dynamic-heading"></h2>
        </div>
    </div>

    <!-- First Row -->
    <div class="row">
        <!-- Selection Dropdown -->
        <div class="col-md-3 text-center">
            <div class="mt-2">Select & Play OR Pause, Select & Play</div>
            <select id="dataSelection" class="form-select btn btn-outline-info">
                <option value="market.csv">Markets</option>
                <option value="sector.csv">Sectors</option>
            </select>
        </div>

        <!-- Play/Pause Button -->
        <div class="col-md-2 text-center">
            <div class="mt-2">Play Animation</div>
            <button id="playPauseButton" type="button" class="btn1 btn-outline-info">Play</button>
        </div>

        <!-- Back Button -->
        <div class="col-md-1 text-center button-container">
            <div id="backButtonText" class="mt-2" style="display: none;">Back</div>
            <button id="backButton" type="button" class="btn2 btn-outline-info">Back</button>
        </div>

        <!-- Forward Button -->
        <div class="col-md-1 text-center button-container">
            <div id="forwardButtonText" class="mt-2" style="display: none;">Forward</div>
            <button id="forwardButton" type="button" class="btn3 btn-outline-info">Forward</button>
        </div>

        <!-- Empty column -->
        <div class="col-md-2 text-center"></div>

        <!-- Table Sort Dropdown -->
        <div class="col-md-3 text-center">
            <div class="mt-2">Sort Table by Metric during "Play" mode</div>
            <select id="sortSelection" class="form-select btn btn-outline-info">
                <option value="total">Total Return</option>
                <option value="income">Income Return</option>
                <option value="capitalvalue">Capital Value</option>
            </select>
        </div>
    </div>

    <!-- Second Row -->
    <div class="row">
        <!-- Bubble Chart -->
        <div class="col-md-8" id="bubble-area"></div>
        <!-- Table -->
        <div class="col-md-4 text-end" id="table-container">
            <div class="mt-2" id="table-box"></div>
            <div id="commentary-box1" style="display: none;"></div>
            <div id="commentary-box2" style="display: none;"></div>
            <div id="commentary-box3" style="display: none;"></div>
            <div id="commentary-box4" style="display: none;"></div>
        </div>


        <!-- Text below scatterplot -->
        <a class="source" href="https://www.msci.com/research-and-insights?topic=real_estate"
           class="text-success" target="_blank">Source: <em>MSCI</em>
        </a>
        <a class="source" href="https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen?language=en"
           class="text-success" target="_blank"><em>Inspired by the Hans Rosling TED talk shown by Dr. Pfister</em>
        </a>
    </div>
</div>

<!-- Load JS libraries: jQuery, bootstrap, D3 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script>

<!-- d3 -->
<script src="https://d3js.org/d3.v7.min.js"></script>

<!-- own js files -->
<script src="js/bubble.js"></script>

</body>
</html>
