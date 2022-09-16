$(document).ready(function() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const insiraTask = $('#insira-task').val();
        const novaTask = $('<li></li>');
        
        $(`<div class="list" style="margin-bottom: 14px">
            ${insiraTask}
        </div>
        `).appendTo(novaTask);
        $(novaTask).appendTo('ul');
        $('#insira-task').val('');

        $('.list').click(function() {
            $(this).css('text-decoration', 'line-through');
        })
    })
})