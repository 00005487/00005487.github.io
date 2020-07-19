$(document).ready(function(){
  $("#add").click(function(){
    var inputValue=$("#input").val();
    $(".toDoList").append(
      `<div class="toDos">
        <input type="checkbox">
        <p>${inputValue}</p>
        <button class="btn btn-danger delete">Delete</button>
      </div>`
    )
    
    $(".delete").each(function(){
      $(this).click(function(){
        $(this).closest('div').remove();
      })
    })
  })
})