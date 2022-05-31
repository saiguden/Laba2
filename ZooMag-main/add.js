console.log("Скрипт загружен")
let formData = new FormData();

var buttonsubmit = document.forms.news.buttonSubmit;
buttonsubmit.addEventListener("click", buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружена");
	evt.preventDefault();

	if (document.forms.news.FormInputHeaderNews.value == '') {
		Swal.fire(
			'Ошибка!',
			'Вы не ввели тему!',
			'error'
		)
		console.log("Вы не ввели наименование новости!");
		return
	}
	if (document.forms.news.FormInputNews.value == '') {
		Swal.fire(
			'Ошибка!',
			'Вы не написали ваш вопрос!',
			'error'
		)
		console.log("Вы не написали ваш вопрос!");
		return
	}
	if (document.forms.news.FormInputAuthor.value == '' && document.forms.news.invalidCheck.checked == false) {
		Swal.fire(
			'Ошибка!',
			'Вы не ввели ваше имя! Или не поставили галочку в поле Анонимно.',
			'error'
		)
		console.log("Вы не ввели ваше имя! Или не поставили галочку в поле Анонимно.");
		return
	}
	formData.append('newsName', document.forms.news.FormInputHeaderNews.value);
	formData.append('newsAuthor', document.forms.news.FormInputAuthor.value);
	if (document.forms.news.invalidCheck.checked == false) {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Ваш вопрос " + formData.get("newsName") + " под именем " + formData.get("newsAuthor"),
			showConfirmButton: false,
			timer: 1500
		}
		)
	} else {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Ваш вопрос " + formData.get("newsName") + " анонимно",
			showConfirmButton: false,
			timer: 1500
		}
		)
	}
	setTimeout(function () { document.location.href = ""; }, 1500);
	console.log("Ваш вопрос отправлен");

}