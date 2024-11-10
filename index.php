<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Recipe Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-cover bg-center" style="background-image: url('https://link-to-your-image.jpg');">
    <div class="flex flex-col items-center justify-center min-h-screen bg-opacity-50 bg-white">
        <h1 class="text-4xl font-bold text-green-500 mb-4">Welcome</h1>
        <h2 class="text-2xl font-semibold text-green-600 mb-6">Random Recipe Generator</h2>

        <div class="flex space-x-4 mb-6">
            <button class="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500">Breakfast</button>
            <button class="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500">Lunch</button>
            <button class="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500">Snack</button>
            <button class="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500">Dinner</button>
        </div>

        <div class="text-center mb-4">
            <label class="text-xl font-semibold text-gray-800">Main Ingredient</label>
            <select class="block w-1/2 mx-auto mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md">
                <option>Pick Ingredient</option>
                <option>Chicken</option>
                <option>Beef</option>
                <option>Vegetables</option>
                <!-- Add more ingredients as needed -->
            </select>
        </div>

        <div class="flex space-x-4">
            <button class="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500">Generate Now</button>
            <button class="bg-red-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-500">Surprise Me</button>
        </div>
    </div>
</body>
</html>
