var elements = document.querySelectorAll('[type=radio]');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', (e) => {
        let marked = e.target.value;
        //let backColor = e.target.previousElementSibling.style;
        if (marked == "correct") {
            //backColor.backgroundColor = "green";

            let parentNode = e.target.parentNode;
            let els = parentNode.parentNode.querySelectorAll('[type=radio]');
            parentNode.style.backgroundColor = 'green';

            for (var n = 0; n < els.length; n++) {
                els[n].disabled = true;
            }

        } else if (marked == "incorrect") {
            //backColor.backgroundColor = "red";
            let parentNode = e.target.parentNode;
            let els = parentNode.parentNode.querySelectorAll('[type=radio]');
            let correct = parentNode.parentNode.querySelector('[value=correct]');
            parentNode.style.backgroundColor = 'red';

            for (var x = 0; x < els.length; x++) {
                els[x].disabled = true;
            }
            
            correct.parentNode.style.backgroundColor = 'green';
            
        }
    })
}