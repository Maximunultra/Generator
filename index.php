<?php
session_start();
//para ma clear yung laman ng cart
if (isset($_POST['clear'])) {
    unset($_SESSION['cart']);
}

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

$total = 0;
$prices = [
    'Pedigree' => 130,
    'Wellness' => 100,
    'California' => 120,
    'lace' => 150,
    'bowl' => 50
];


if ($_SERVER['REQUEST_METHOD'] == 'POST' && !isset($_POST['clear'])) {
    foreach ($prices as $product => $price_per_unit) {
        if (isset($_POST[$product])) {
            $quantity = (int)$_POST[$product];
            $_SESSION['cart'][$product] = $quantity;
        }
    }
}


foreach ($_SESSION['cart'] as $product => $quantity) {
    if ($quantity > 0) {
        $total += $quantity * $prices[$product];
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Shop</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bolder;
        }
        body {
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            background-color: red;
            margin: 5px;
            background-color: white;
        }
        .main-container {
            display: flex;
            justify-content: center;
            align-items: center;    
            width: 100%;
            height: 100vh;
            margin-top: 50px;
        }
        .left-container, .right-container {
            width: 100vh;
            height: 100%;
        }
        .left-container {
            display: flex;
            justify-content:center;
            
        }
       
        .left-container .img-container {
            display: flex;
            justify-content: center;
        }
        .left-container .img-container img {
            height: 100px;
        }
        .left-container input {
            width: 100px;
            padding: 8px;
            margin-top: 5px;
            outline: none;
            text-align: center;
           
        }
        .custom-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .left-container .custom1 .input {
            display: flex;
            justify-content: center;
        }
        .left-container .custom2 .input {
            display: flex;
            justify-content: center;
        }
        .left-container .custom2 {
            margin-left: 20px; 
        }
        h1 , h5{
            font-size: 24px;
            text-align: center;
            margin-bottom: 10px;

        }
        form {
            border-radius: 8px;
        }
        div {
            margin-bottom: 15px;
        }
        label div {
            font-weight: bold;
            text-align: center;
            margin: 0;
        }

        button {
            padding: 10px 20px;
            background-color: #28a745;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
        hr {
            margin: 20px 0;
        }
        
    </style>
    
</head>
<body>
<div class="main-container">
    <div class="left-container">
        <form class="pet-shop" action="" method="POST">
            <h1>Pet Shop </h1>
            <h5>Laurence Palacio</h5>
            <div class="custom-container">
                <div class="custom1">
            <div class="img-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gzeF1rHSdzq9t9FfxFjbboIMBScPWMZatg&s" alt="">
            </div>
        <div>
            <label for="Pedigree"><div>Pedigree</div></label>
            <label>Price per kilo: 130 </label><br>
            <input type="number" name="Pedigree" id="Pedigree" min="0" value="<?php echo isset($_SESSION['cart']['Pedigree']) ? $_SESSION['cart']['Pedigree'] : 0; ?>">
        </div>
        <div class="img-container">
                <img src="https://m.media-amazon.com/images/I/71aWnM9y1yL._AC_UF1000,1000_QL80_.jpg" alt="">
            </div>
        <div>
            <label for="Wellness"><div>Wellness</div></label>
            <label>Price per kilo: 100 </label><br>
            <input type="number" name="Wellness" id="Wellness" min="0" value="<?php echo isset($_SESSION['cart']['Wellness']) ? $_SESSION['cart']['Wellness'] : 0; ?>">
        </div>
        <div class="img-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vzSO12S8bGvrkDgyXhq50WCHuSyUWHOJVw&s" alt="">
            </div>
        <div>
            <label for="California"><div>California Natural</div></label>
            <label>Price per kilo: 120 </label><br>
            <input type="number" name="California" id="California" min="0" value="<?php echo isset($_SESSION['cart']['California']) ? $_SESSION['cart']['California'] : 0; ?>">
            </div>
        </div>
        <div class="custom2">
        <div class="img-container">
                <img src="https://img.lazcdn.com/g/p/604432a120da3436e3a43d1eaf7b60f2.jpg_720x720q80.jpg" alt="">
            </div>
            <div>
            <label for="lace"><div>Lace</div></label>
            <label>Price per kilo: 150 </label><br>
            <input type="number" name="lace" id="lace" min="0" value="<?php echo isset($_SESSION['cart']['lace']) ? $_SESSION['cart']['lace'] : 0; ?>">
        </div>
        <div class="img-container">
                <img src="https://i.ebayimg.com/00/s/MTI1MFgxMjUw/z/fNEAAOSwHaBWjkvK/$_57.JPG?set_id=880000500F" alt="">
            </div>
        <div>
            <label for="bowl"><div>Bowl</div></label>
            <label>Price per bowl: 50 </label><br>
            <input type="number" name="bowl" id="bowl" min="0" value="<?php echo isset($_SESSION['cart']['bowl']) ? $_SESSION['cart']['bowl'] : 0; ?>">
            </div>
            </div>
        </div>
        <button type="submit">Add to cart</button>
        </form>
        </div>
        
   
    
   
    <div class="right-container">
        <h2>Pet Cart</h2>
            <?php if (!empty($_SESSION['cart'])): ?>
            <table>
                 <tr>
                <th>Product</th>
                 <th>Quantity</th>
                 <th>Price</th>
                 <th>Total</th>
                </tr>
            <?php foreach ($_SESSION['cart'] as $product => $quantity): ?>
                <?php if ($quantity > 0): ?>
                    <tr>
                        <td><?php echo ucfirst($product); ?></td>
                        <td><?php echo $quantity; ?></td>
                        <td>₱<?php echo $prices[$product]; ?></td>
                        <td>₱<?php echo $quantity * $prices[$product]; ?></td>
                    </tr>
                <?php endif; ?>
            <?php endforeach; ?>
                    <tr>
                        <th>Total</th>
                        <th>₱<?php echo $total; ?></th>
                    </tr>
             </table>
        <?php endif; ?>
         <form method="POST" action="">
            <button type="submit" name="clear">Clear Cart</button> 
                </form>
        </div>

    </div>
</body>
</html>
