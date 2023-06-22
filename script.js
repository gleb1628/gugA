for(let i in cats){
    html = `
    <div class="card">
        <img src="${cats[i].img_link}" alt="" class="main_image ">
        <div class="name">${cats[i].name}</div>
        <div class="years">Возраст: ${cats[i].age}</div>
        <div class="rate">Оценка:${cats[i].rate}</div>
        <div class="description">${cats[i].description}</div>
    `
    if(cats[i].favourite){
        html += `<img src="https://s.pfst.net/2016.01/1083993167567358d7ba852efc2000ba931061819ac24_b.jpg" alt="" class="heart">`
    }

    html += '</div>'
    document.body.innerHTML += html
    i++
}

