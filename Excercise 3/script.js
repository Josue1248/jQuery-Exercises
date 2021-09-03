$(document).ready(function(){
    var notes;

    $.ajax('https://jsonplaceholder.typicode.com/todos')
        .done((res)=>{
            notes = res;

            notes.forEach(note => {
                let row = `<tr class="${note.completed ? "completed": ""}">
                    <td>${note.id}</td>
                    <td>${note.title}</td>
                    <td>${note.completed}</td>
                </tr>`;
                $('#todos > tbody:last-child').append(row);
            });
        })

})


//cachavezf@gmail.coim
