const items = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];
    console.log(items)

    const container = document.querySelector('.blog__content');

    function renderPostPreview(title, body) {
        return `<div class="post-preview">
        <div class="post-preview__img">
            <img src="https://fakeimg.pl/640x120/282828/eae0d0/?retina=1">
        </div>
        <div class="post-preview__desc">
            <h3 class="post-preview__title">
            ${title}
            </h3>
            <p class="post-preview__text">
            ${body}
            </p>
            <div class="post-preview__actions">
                <button class="btn">
                    Read more
                </button>
            </div>
        </div>
    </div>`
    }

    items.forEach(post => {
        let preview = renderPostPreview(post.title, post.body);
        container.insertAdjacentHTML('beforeend', preview);
    });

    const button = document.querySelector('.svg-button');
    const input = document.querySelector('.search-input');
   
    button.addEventListener('click', function() {
        document.querySelector('.search-input').classList.toggle('hide')
    });

    input.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            console.log(event.target.value)
        }
    })


    // document.addEventListener("keydown", function(event) {
    //     console.log(event.which);
    // })