$(document).ready()
{
    $('.select2-multiple').select2MultiCheckboxes({
        placeholder: "Планировка",
        formatSelection: function (selected, total) {
            return "Выбран " + selected.length + " из " + total;
        }
    })

    $('.select3-multiple').select2MultiCheckboxes({
        placeholder: "Стили кухни",
        formatSelection: function (selected, total) {
            return "Выбран " + selected.length + " из " + total;
        }
    })

    $('.select4-multiple').select2MultiCheckboxes({
        placeholder: "Цвет",
        formatSelection: function (selected, total) {
            return "Выбран " + selected.length + " из " + total;
        }
    })
}
