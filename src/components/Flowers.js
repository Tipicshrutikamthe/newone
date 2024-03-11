import React from 'react'
import { motion } from "framer-motion"

function Flowers() {
  return (
    <>
    <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.8 }}
    >
    <div >
      <h1 class="bg-green-500 tet-white text-4xl font-bold text-center"> विविध फुलांची रोपे</h1></div>
  < div class=" w-screen  h-full bg-pink-200 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  place-content-center items-center gap-y-4  ">
  <div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/11/10/06/02/herbstaster-3806015_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">बिजली</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/05/26/13/05/flower-3431316_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">गुलाब</h5>
     
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold  text-blue-950">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2017/07/04/17/13/carnations-of-india-2471877_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">झेंडू</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2013/06/14/18/59/water-lily-139364_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">लिली</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-blue-950">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/07/20/13/52/sunflower-3550693_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950">सूर्यफूल</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/02/26/05/20/flowers-3182324_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-blue-950 ">ऑर्किड</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2019/02/12/18/08/hibiscus-3992852_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">जास्वंद</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="https://wa.me/c/919886591867" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2022/11/10/07/34/shevanti-7582141_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">शेवंती</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>

</div>
<div div class=" w-screen  h-full mt-2 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  place-content-center items-center gap-y-2 bg-pink-200 ">

<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2022/10/19/08/23/flowers-7531925_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">बिजली</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2019/10/02/16/37/aster-4521374_1280.jpg" alt="product image" />
  
  <div class=" text-center ">
      <a href="#">
          <h5 class="text-2xl  mb-3 font-semibold tracking-tight  text-blue-950">एस्टर</h5>
      </a>
     
      <div class="flex items-center justify-evenly">
          <span class="text-3xl font-bold text-gray-900 ">१० रुपये</span>
          <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">कार्टमध्ये जोडा</a>
      </div>
  </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2022/11/13/07/49/jasmine-7588491_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">मोगरा</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>
<div class="w-64 pb-2   bg-green-100 text-gray-900border-2 border-red-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img class=" rounded-t-lg" src="https://cdn.pixabay.com/photo/2023/06/12/13/50/periwinkle-8058569_1280.jpg" alt="product image" />
 
 <div class=" text-center ">
     <a href="#">
         <h5 class="text-2xl  mb-3 font-semibold tracking-tight text-gray-900text-blue-950">सदाफुली</h5>
     </a>
    
     <div class="flex items-center justify-evenly">
         <span class="text-3xl text-gray-900font-bold  text-blue-950">१० रुपये</span>
         <a href="#" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:animate-bounce">कार्टमध्ये जोडा</a>
     </div>
 </div>
</div>

</div>
</motion.div>
   </>
  )
}

export default Flowers
