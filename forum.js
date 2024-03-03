const loadForums = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const forums = data.posts;
    //  console.log(forums);

    const forumsContainer = document.getElementById('forums-container');
    forums.forEach(forum =>{
        const div = document.createElement('div');
        // console.log(forum)
        div.className = 'flex gap-3 bg-gray-100 p-8 border border-dashed rounded-xl max-w-[700px] shadow-xl'
        
        div.innerHTML = `
        <div class="indicator">
                <span class="indicator-item badge badge-secondary bg-red-500"></span> 
                <img class="w-20 h-20 rounded-xl" src="${forum.image}" alt="">
            </div>
            <div class="space-y-2">
                <div>
                <p class="text-xs font-semibold text-[#12132DCC]">
                    <span class="mr-3 ">#${forum.category}</span> <span>Author: ${forum.author?.name}</span>
                </p>
                </div>
                <h4 class="text-2xl font-bold text-[#12132D]">${forum.title} </h4>
                <p class="text-xl text-[#12132D99]">${forum.description}</p>
                <hr class="border border-dotted">
        <div class="flex justify-between">
           <div class="flex gap-3 text-xl text-[#12132D99]">
                <span class="flex gap-1">
                    <img src="images/Vector.png" alt="">
                    <span>${forum.
                        comment_count}</span>
                </span>
                <span class="flex gap-1">
                    <img src="images/Vector (1).png" alt="">
                    <span>${forum.view_count}</span>
                </span>
                <span class="flex gap-1">
                    <img src="images/Vector (2).png" alt="">
                    <span>${forum.posted_time}</span> min
                </span>
            </div>

            <button onclick="" class="btn-clicked"><img src="images/email.png" alt=""></button>

         </div>
            </div>

        `;
        forumsContainer.appendChild(div);

        const buttons = document.querySelectorAll('.btn-clicked');
        for(const btn of buttons){
            btn.addEventListener('click', function(){
                 
                 console.log('clicked')
            })
        }
      
        
     
    })

}


loadForums()