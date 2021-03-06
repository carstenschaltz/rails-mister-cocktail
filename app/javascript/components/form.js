import swal from 'sweetalert';

function deleteAlert() {


  const submitBtn = document.querySelectorAll("#delete-button")
  submitBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      console.log("click")
      swal({
        title: "Are you sure?",
        text: "This will permanently delete your dose!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          document.getElementById('delete-btn').click()
        } else {
          console.log("don't delete");
        }
      });
    });
  });
};

export { deleteAlert };
