<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Download Website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      text-align: center;
      background-color: #f4f4f4;
    }

    header {
      background-color: #333;
      color: white;
      padding: 20px;
    }

    input[type="text"] {
      padding: 10px;
      margin-top: 10px;
      width: 80%;
      max-width: 300px;
    }

    #imageGallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
    }

    .image-item {
      margin: 10px;
      position: relative;
    }

    .image-item img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    button {
      position: absolute;
      bottom: 10px;
      left: 10px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: rgba(0, 0, 0, 0.9);
    }

    footer {
      padding: 20px;
      background-color: #333;
      color: white;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <header>
    <h1>Download Free Images</h1>
    <input type="text" id="searchBar" placeholder="Search images...">
  </header>

  <section id="imageGallery">
    <!-- Image 1 -->
    <div class="image-item">
      <img src="https://picsum.photos/300/200?random=1" alt="Random Image 1">
      <a href="https://picsum.photos/300/200?random=1" download="image1.jpg">
        <button>Download Image 1</button>
      </a>
    </div>
    
    <!-- Image 2 -->
    <div class="image-item">
      <img src="https://picsum.photos/300/200?random=2" alt="Random Image 2">
      <a href="https://picsum.photos/300/200?random=2" download="image2.jpg">
        <button>Download Image 2</button>
      </a>
    </div>
    
    <!-- Image 3 -->
    <div class="image-item">
      <img src="https://picsum.photos/300/200?random=3" alt="Random Image 3">
      <a href="https://picsum.photos/300/200?random=3" download="image3.jpg">
        <button>Download Image 3</button>
      </a>
    </div>
    
    <!-- Image 4 -->
    <div class="image-item">
      <img src="https://picsum.photos/300/200?random=4" alt="Random Image 4">
      <a href="https://picsum.photos/300/200?random=4" download="image4.jpg">
        <button>Download Image 4</button>
      </a>
    </div>

    <!-- Image 5 -->
    <div class="image-item">
      <img src="https://picsum.photos/300/200?random=5" alt="Random Image 5">
      <a href="https://picsum.photos/300/200?random=5" download="image5.jpg">
        <button>Download Image 5</button>
      </a>
    </div>
  </section>
  
  <footer>
    <p>&copy; 2025 Image Download Website</p>
  </footer>
</body>
</html>
