async function insertion(){

    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = '#41b3a3';
    for(let i = 1; i < ele.length; i++){
       
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = '#c38d9e';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            
            // color
            ele[j].style.background = '#c38d9e';
            swap(ele[j + 1],ele[j])
            
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = '#41b3a3';
            }
        }
        ele[j + 1].style.height = key;
        // ele[j + 1].innerHTML = ele[i].innerHTML;
        // color
        ele[i].style.background = '#41b3a3';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableCustomArray()
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableCustomArray()
});


