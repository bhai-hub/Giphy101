const form = document.querySelector('.frm')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const keyWord = document.querySelector('#srch').value;
    const arr = []

    const api = 'https://api.giphy.com/v1/stickers/search?api_key=Q7qiUrK68v1HdkX0wr8NDjC2hb0mRcbo&q='+keyWord+'&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

    fetch(api)
        .then(response=>{
            if(!response.ok){
                throw new Error("Can't access")
            }

            return response.json()
        })
        .then(data =>{
            arr.push(data.data)
            console.log(arr[0])
        })
        .catch(error =>{
            console.error(error)
        })
})

