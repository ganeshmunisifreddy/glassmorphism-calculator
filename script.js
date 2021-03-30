function calc(val) {
  form.resultInput.value+=val;
}

function getResult() {
  let val = form.resultInput.value;
  if (val) {
    form.resultValue.value = eval(form.resultInput.value);
  }
}

function resetInput() {
  form.resultInput.value = '';
  form.resultValue.value = '';
}

function handleBackspace() {
  let val = form.resultInput.value;
  if (val) {
    val = val.substring(0, val.length - 1);
    form.resultInput.value = val;
    form.resultValue.value = '';
  }
}
