class News {
    id
    title
    text
    tags
    dateOfPublication
    img

    constructor(id, title, text, tags, dateOfPublication, img) {
        this.id = id
        this.title = title
        this.text = text
        this.tags = tags
        this.dateOfPublication = dateOfPublication
        this.img = img
    }

    print() {
        let diffirence = Math.trunc((Math.abs(new Date() - this.dateOfPublication) / 1000 / 60 / 60 / 24))
        if (diffirence <= 1) {
            diffirence = 'Сьогодні'
        }
        else {
            if (diffirence <= 7) {
                if (diffirence == 1)
                    diffirence = `${diffirence} день тому`
                if (diffirence > 1 && diffirence <= 4)
                    diffirence = `${diffirence} дня тому`
                if (diffirence > 4)
                    diffirence = `${diffirence} днів тому`
            } else {
                let a = new Date(this.dateOfPublication)
                diffirence = `${a.getDate()}.${a.getMonth() + 1}.${a.getFullYear()}`
            }
        }

        return `
        <div class ='news-block' style="background-image: url(${this.img});">
        <div class='b'>
        <h2>${this.title}</h2>
      <p class='text'>${this.text}</p>
      <div class='a'>
      <div class='date'>${diffirence}</div>
      <div class='tags'>${this.tags}</div>
      </div>
      </div>
      </div>`
    }

    // cropText(text, maxSymbols) {
    //     let croppedText = text.substring(0, maxSymbols - 3);
    //     return croppedText + "...";
    // }

}



class NewsList {
    newsArray

    constructor(newsArray) {
        this.newsArray = newsArray
    }

    displayOnScreen() {
        for (const news of this.newsArray) {
            container.innerHTML += news.print()
        }
    }

    sortNews(callback) {
        this.newsArray.sort(callback)
    }

    deleteNews(id) {
        this.newsArray = this.newsArray.filter((news) => news.id != id)
    }

    displayNewsCount(array) {
        let newsCount = document.getElementById(`countInfo`)
        newsCount.innerHTML = `ЗАГАЛЬНА КІЛЬКІСТЬ НОВИН: ${array.length}`
    }

    addNews(news) {
        this.newsArray.push(news)
    }

    findNewsByTag(tag) {
        let res = this.newsArray.filter((news) => news.tags.includes(tag))
        return newsByTag.push(res)
    }

}
//---------------------------НОВИНИ----------------------------------
let newsArray = [
    new News(1,
        `Porsche presents a new sports concept car`,
        `Porsche is stunning the world with its latest creation, 
             a new sports concept car that captures the eye with its bold 
             design and cutting-edge technology. This car promises to combine 
             the power and grace that are the hallmarks of Porsche and become a 
             true gem in the world of automotive design.`,
        ["#Porsche", "#technology", "#LastNEWS", "#design"],
        new Date(2024, 1, 12),
        `https://images.unsplash.com/photo-1550855909-c4f6798dd77f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`),

    new News(2, `A new species of fish in the Pacific Ocean`,
        `International scientists have announced the discovery of a new species of 
              marine fish in the deep waters of the Pacific Ocean. The species is 
              called <b> Bathypterus pacificus </b> and has become a subject of 
              interest for research into its ecology and biology.`,
        ['#Science', '#NewTypeOfFish', '#new discovery'],
        new Date(2023, 9, 24),
        'https://images.unsplash.com/photo-1493662404096-9ecc84ebba6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

    new News(3, `Inside Apple's Vision: Innovations Unveiled`,
        `At a highly anticipated event, Apple lifts the curtain on their 
    forward-thinking vision, showcasing a range of groundbreaking 
    innovations. From sleek designs to powerful enhancements, the tech 
    giant's latest reveal promises an exciting leap forward in technology.`,
        ['#apple', '#technology'], new Date(2024, 0, 4),
        `https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`),

    new News(4, `New Peaks: Adventure Awaits!`,
        `Mountaineers conquer uncharted peaks, defy perilous terrain and 
    extreme weather. Battling avalanches and icy crevasses, their 
    determination leads to summit triumph, showcasing human spirit 
    and thrill of exploration.`,
        ['#Mountain', '#Adventure', '#Extream'], new Date(2023, 7, 12),
        'https://images.unsplash.com/photo-1516825994218-b2d93290b0fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new News(5, `Technological Advancements Shine Globally`,
        `Tokyo's innovations in robotics and sustainable energy lead the 
    global stage. Its blend of tradition and modernity captivates, 
    especially in architecture. As the city prepares for global events, 
    anticipation grows for its next wave of innovation.`,
        [`#TokyoTech`, `#Robotics`, `#Sustainability`],
        new Date(2024, 1, 18),
        `https://images.unsplash.com/photo-1701888281386-5ac0e1bb1ef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`),
    new News(6, `"Echoes of Eternity" Unveiled`,
        `A new masterpiece, "Echoes of Eternity," 
    by the mysterious artist Vesper, mesmerizes with its
     surreal blend of colors. This captivating painting invites 
     contemplation, promising to leave a lasting impression on art 
     enthusiasts.`,
        ['#Picture', `#ART`, `#Vesper`],
        new Date(2023, 11, 23),
        `https://images.unsplash.com/photo-1569783721854-33a99b4c0bae?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`),
]

let newsByTag = [

]
console.log(newsByTag);
let container = document.getElementById('tc')
let displayNews = new NewsList(newsArray)
//---------------------ВИВОДЖЕННЯ НА ЕКРАН---------------------------
displayNews.displayOnScreen()
displayNews.displayNewsCount(newsArray)
//------------------СОРТУВАННЯ ЗА ДАТОЮ ПУБЛІКАЦІЇ--------------------
// displayNews.sortNews((n1 , n2) => (n2.dateOfPublication.getTime() / 1000 / 60 / 60 / 24) - (n1.dateOfPublication.getTime() / 1000 / 60 / 60 / 24))
// displayNews.displayOnScreen()
// displayNews.displayNewsCount(newsArray)
//--------------------ВИДАЛЕННЯ НОВИНИ ЗА ID--------------------------
// displayNews.deleteNews(6)
// displayNews.displayOnScreen()
// displayNews.displayNewsCount(newsArray)
//-----------------------------ДОДАТИ НОВИНУ---------------------------
// displayNews.addNews(new News(7,`1.01.2024`,`TEST`,[1,5,3], new Date(2024,0,1)))
// displayNews.displayOnScreen()
// displayNews.displayNewsCount(newsArray)
//----------------------ПОШУК ЗА ТЕГОМ(displayNews.findNewsByTag('ТЕГ') - новий масив виводиться в консольці)
displayNews.findNewsByTag('design')










