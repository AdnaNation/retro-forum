const loadForums = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const forums = data.posts;
    //  

    const forumsContainer = document.getElementById('forums-container');
    forums.forEach(forum =>{
        const div = document.createElement('div');
        //  console.log(forum)
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
                <h4 class="forum-title text-2xl font-bold text-[#12132D]">${forum.title} </h4>
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

            <button onclick="buttonClick('${forum.title}', '${forum.view_count}')" class="btn-clicked"><img src="images/email.png" alt=""></button>

         </div>
            </div>

        `;
        forumsContainer.appendChild(div);

      
    });

};
const selectedForumsContainer= document.getElementById('selected-forums-container');
const div = document.createElement('div');
div.innerText= 'I love'
selectedForumsContainer.appendChild(div)


const buttonClick = (title,view) =>{
    // const selectedForumsContainer= document.getElementById('selected-forums-container');
    const div = document.createElement('div');
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    div2.innerText = title;
    div3.innerText =view;
    div4.innerHTML= ` <img class="ml-24" src="images/Vector (1).png" alt="">`
    div.appendChild(div2);
    div.appendChild(div4);
    div.appendChild(div3);
    selectedForumsContainer.appendChild(div)
    div.className='flex gap-8 items-center bg-white rounded-lg my-5 p-4'

}


loadForums()