//output

let output = []

const show = () => {
        document.getElementById("blog-post").innerHTML = ""

        for (let i = 0; i < output.length; i++) {

            let title = document.createElement("h2")
            title.innerHTML = output[i].title

            let img = document.createElement("img")
            img.src = output[i].img


            let category = document.createElement("h4")
            category.innerHTML = output[i].category

            let content = document.createElement("p")
            content.innerHTML = output[i].content



            let author = document.createElement("h5")
            author.innerHTML = output[i].author




            let like = document.createElement("button")
            like.innerHTML = "Like"
            like.addEventListener("click", () => {
                alert("like!")
                show();
            })


            let dlt = document.createElement("button")
            dlt.innerHTML = "Remove"

            dlt.addEventListener("click", () => {
                output.splice(i, 1)
                    // btn.setAttribute("class", "btn"); //for css
                show();


            })



            title.setAttribute("class", "title")

            img.setAttribute("class", "img")
            category.setAttribute("class", "category")
            content.setAttribute("class", "content")

            author.setAttribute("class", "author")
            like.setAttribute("class", "like")
            dlt.setAttribute("class", "dlt")




            let div = document.createElement("div")
            div.append(title, img, content, category, author, like, dlt);

            document.getElementById("blog-post").append(div)
        }
    }
    // document.getElementById("blogForm").addEventListener("submit", function(event) {
    //             event.preventDefault();

const blog = (e) => {
    e.preventDefault()

    let title = document.getElementById("title").value;
    let img = document.getElementById("image").value;
    let content = document.getElementById("content").value;

    let category = document.getElementById("category").value;
    let author = document.getElementById("author").value;



    let otp = {
        title: title,
        img: img,
        content: content,
        category: category,
        author: author,

    }

    output.push(otp)


    console.log(output, otp);
    show()


};

document.getElementById("blogForm").addEventListener("submit", blog)