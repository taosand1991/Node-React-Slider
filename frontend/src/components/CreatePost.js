import React, {useEffect} from 'react';
let currentIndex = 0;
function CreatePost(props) {
    
    useEffect(() => {
        const pageDiv = document.querySelector('.create-post')
        pageDiv.classList.add('swiper')
        const itemsBox = document.querySelectorAll('.items-box')
        carousel(currentIndex);
        setInterval(() => {
        currentIndex++
        if(currentIndex >= itemsBox.length){
        currentIndex = 0;
        }
        console.log(currentIndex)
        carousel(currentIndex)
        }, 5000)
    })

    function carousel(n) {
        const itemsBox = document.querySelectorAll('.items-box')
        const dots = document.querySelectorAll('.dots')
        itemsBox.forEach(items => {
            items.style.left = '100%'
        })
        dots.forEach((dot, index) => {
            dot.classList.remove('active')
            dot.addEventListener('click', function(){
                currentIndex = index;
                dots.forEach(dot => {
                    dot.classList.remove('active')
                })
                carousel(n)
            })
        })
        itemsBox[currentIndex].style.left = '0'
        dots[currentIndex].classList.add('active')
        
      }
              
    return (
        <div className='create-post'>
            <div className='slider-box'>
                <div className='items-box'>
                <img src='https://www.technocrazed.com/wp-content/uploads/2015/12/Tree-wallpaper-to-use-as-background-1.jpg' alt=''/>
                </div>
                <div className='items-box'>
                    <img src='https://images.template.net/wp-content/uploads/2015/08/Butterfly-Backgrounds.jpg' alt=''/>
                </div>
                <div className='items-box'>
                <img src='https://i.pinimg.com/originals/a8/f6/bd/a8f6bd191cdaaefd240eff1b6efde121.jpg' alt=''/>
                </div>
                <div className='dots active'></div>
                <div className='dots'></div>
                <div className='dots'></div>
            </div>
           <div className='post-form'>
               <form>
                   <div className='form-inline'>
                       <i className='fa fa-clipboard'/>
                       <input type='text' placeholder='post title'/>
                   </div>
                   <div className='form-inline'>
                       <i className='fa fa-audio-description'/>
                       <textarea rows={2} cols={5} placeholder='post description'/>
                   </div>
                   <div className='button-div'>
                   <button>create post</button>
                   </div>
               </form>
               </div> 
        </div>
    );
}

export default CreatePost;