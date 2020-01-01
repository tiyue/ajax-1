
Getcss.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('GET', '/style.css');
    request.onload = () => {
        let style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log("失败")
    }
    request.send()
}
Getjs.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('get', '/2.js');
    request.onload = () => {
        let script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {

    }
    request.send()

}
Gethtml.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('get', '/3.html');
    request.onload = () => {
        let div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {

    }
    request.send()
}
Getxml.onclick = () => {
    let request = new XMLHttpRequest();
    request.open('get', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let dom = request.responseXML;
            let text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
}
Getjson.onclick = () => {
    let request = new XMLHttpRequest();
    request.open('get', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let obj = JSON.parse(request.response)
            myName.textContent = obj.name
        }
    }
    request.send()
}