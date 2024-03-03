let markAsRead = 1;
// lets discussion section``
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
                <span id="indicator" class="indicator-item badge badge-secondary ${forum.isActive?"bg-red-500":"bg-green-500"}"></span> 
                <img class="w-20 h-20 rounded-xl" src="${forum.image}" alt="">
            </div>
            <div class="space-y-2">
                <div>
                <p class="text-xs font-semibold text-[#12132DCC]">
                    <span class="mr-3 ">#${forum.category}</span> <span>Author: ${forum.author.name}</span>
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

            <button onclick="buttonClick('${forum.title.replace(/'./g,' ')}', '${forum.view_count}')" ><img src="images/email.png" alt=""></button>

         </div>
            </div>

        `;
        forumsContainer.appendChild(div);

      
    });

};


const selectedForumsContainer= document.getElementById('selected-forums-container');
const div = document.createElement('div');
div.innerHTML = `<div class="flex flex-between gap-[210px] lg:gap-80">
    <p class="text-2xl font-bold">Title</p>
    <p>Mark as read (<span id="mark-read">0</span>)</p>
</div>`;
selectedForumsContainer.appendChild(div)


const buttonClick = (title,view) =>{
   
    const setInnerText = document.getElementById('mark-read').innerText= markAsRead;
    
    markAsRead ++;
   
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
    div.className='flex gap-8 items-center bg-white rounded-lg my-5 p-4 text-xl'
    

}

const loadLatestPosts = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    const posts = data;
    
    // accessing every post
    const latestPostsContainer = document.getElementById('latest-posts-container');
    posts.forEach(post =>{
        const div = document.createElement('div');
        div.className='card  bg-white shadow-xl'
        div.innerHTML = `
        <figure class="p-4 lg:pt-8"><img class="rounded-lg"
        src="${post.cover_image}" alt="Shoes" />
</figure>
<div class="card-body space-y-2">
    <h3 class="flex gap-5 text-[#12132D99] text-xl"><span><img src="images/date.png" alt=""></span>
        <span>${post?.author?.posted_date|| 'No publish date'}</span>
    </h3>
    <h2 class="card-title text-lg lg:text-2xl font-extrabold">${post.title}</h2>
    <p class="text-[#12132D99] text-lg lg:text-xl">${post.description}</p>
    <div class="flex gap-3">
        <img class="w-11 rounded-full" src="${post.profile_image}" alt="">
        <div>
            <p class="text-lg font-bold text-black">${post.author?.name}</p>
            <p class="text-sm text-[#12132D99]">${post.author?.designation||'Unknown'}</p>
        </div>
        
        `;
        latestPostsContainer.appendChild(div);
    });
};

loadLatestPosts()
loadForums()