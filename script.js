let form=document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let tr=document.createElement('tr');
    let td=document.createElement('td');
    let deletebtn=document.createElement('button')
    deletebtn.innerText='x';
    deletebtn.classList.add('delete')
    let tbody=document.querySelector('tbody')
    tbody.append(tr);
    tr.append(td,deletebtn)
    tr.innerText=event.target.task.value;
    deletebtn.addEventListener('click',hide)
    function hide(element){
        element.remove();
    }
})