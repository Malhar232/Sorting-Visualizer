
const preloader=document.querySelector(".parent-loader")

function start_journey() {
    introJs().setOptions({
        
        steps: [{
            intro: "<h1>Sorting Visualizer</h1><br><p>This tool will help you to get a better understanding of basic sorting algorithms! You can test sorting algorithms like Bubble Sort, Quick Sorth, Merge Sort, Selection Sort and Insertion Sort in real time.</p>"
        }, {
            element: document.querySelector('#size'),
            intro: "Adjust the size of the input array"
        },
        {
            element: document.querySelector('#speed'),
            intro: "Adjust the speed of sorting"
        },
        {
            element: document.querySelector('#newarr'),
            intro: "Generate an array of random numbers of given size"
        },
        {
            element: document.querySelector('#custom-arr'),
            intro: "Input a custom array of your choice",
        },
        {
            element: document.querySelector('#algo'),
            intro: "Sorting Algorithms"
        },
        {
            intro: `<h1>Bubble Sort</h1><br><img src='./bubble-sort-in-java-1.gif' alt='bubblesort.gif' width='125px'><br><br><p style="font-size:16px">Bubble Sort is a simple algorithm which is used to sort a given set of n elements provided in form of an array with n number of elements. Bubble Sort compares all the element one by one and sort them based on their values.

            If the given array has to be sorted in ascending order, then bubble sort will start by comparing the first element of the array with the second element, if the first element is greater than the second element, it will swap both the elements, and then move on to compare the second and the third element, and so on.
            </p>`

        },
        {
            
            intro: `
            <h1>Bubble Sort</h1>
            <p style="font-size:16px">
            If we have total n elements, then we need to repeat this process for n-1 times.
            
            It is known as bubble sort, because with every complete iteration the largest element in the given array, bubbles up towards the last place or the highest index, just like a water bubble rises up to the water surface.
            
            Sorting takes place by stepping through all the elements one-by-one and comparing it with the adjacent element and swapping them if required.
                <p style="font-size:16px; text-align:start; padding-left:20px">
                <b>Worst and Average Case Time Complexity:</b> O(n*n). Array is reverse sorted.
                <br>
                <b>Best Case Time Complexity:</b> O(n). Best case occurs when array is already sorted.
                <br>
                <b>Auxiliary Space:</b> O(1)
                </p>
            </p>`,

        },
        {
            
            intro: `<h1>Selection Sort</h1><br><img src='./selection.gif' alt='selection.gif' width='225px'><br><br><p style="font-size:16px">
            
            The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
            <br>
            <p style="font-size:16px; text-align:justify; padding-left:50px">
            <b>
            1) The subarray which is already sorted. 
            </b>
            <br>
            <b>
            2) Remaining subarray which is unsorted.
            </b>
            </p>
            </p>`

        },
        {
            
            intro: `
            <h1>Selection Sort</h1>
            <p style="font-size:16px">
            In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
                <p style="font-size:16px; text-align:start; padding-left:20px">
                <b>Time Complexity:</b> O(n^2) as there are two nested loops.
                <br>
                <b>Auxiliary Space:</b> O(1) 
                <br>
                The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.

                </p>
            </p>`,

        },
        {
            
            intro: `<h1>Insertion Sort</h1><br><img src='./InsertionSort.gif' alt='insertion.gif' width='225px'><br><p style="font-size:16px">
            The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.
            <p style="font-size:16px; text-align:justify; padding-left:50px">
            <b>
            1: Iterate from arr[1] to arr[n] over the array. 
            </b>
            <br>
            <b>
            2: Compare the current element (key) to its predecessor. 
            </b>
            <br>
            <b>
            3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
            </b>
            </p>
            </p>`

        },
        {
            
            intro: `
            <h1>Insertion Sort</h1>
            <p style="font-size:16px">
                <p style="font-size:16px; text-align:start; padding-left:20px">
                <b>Time Complexity:</b> O(n^2) 
                <br>
                <b>Auxiliary Space:</b> O(1) 
                <br>
                <b>Boundary Cases:</b> Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.
                </p>
            </p>`,

        },
        {
            
            intro: `<h1>Quick Sort</h1><br><img src='./quick.gif' alt='quick.gif' width='125px'><br><p style="font-size:16px">
            Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.             
            <p style="font-size:16px; text-align:justify; padding-left:50px">
            <b>
            1: Always pick first element as pivot.
            </b>
            <br>
            <b>
            2: Always pick last element as pivot (implemented below) 
            </b>
            
            </p>
            </p>`

        },
        {
            
            intro: `
            <h1>Quick Sort</h1>
            <p style="font-size:16px; text-align:justify; padding-left:50px">
            <b>
            3: Pick a random element as pivot.
            </b>
            <br>
            <b>
            4: Pick median as pivot.
            </b>
            </p>
            <p style="font-size:16px">
                <p style="font-size:16px; text-align:start; padding-left:20px">
                <b>Best-case performance:</b> O(n log n)
                <br>
                <b>Worst-case space complexity:</b>  O(n)
                <br>
                <b>Worst-case performance:</b> O(n^2)
                <br>
                <b>Average performance:</b> O(n log n)
            </p>`,

                
        },
        {
            
            intro: `<h1>Merge Sort</h1><br><img src='./Merge.gif' alt='Merge.gif' width='300px'><br><br><p style="font-size:16px">
            Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See the following C implementation for details.       
            </p>`

        },
        {
            
            intro: `
            <h1>Merge Sort</h1>
            
            <br>
            <p style="font-size:16px; text-align:justify; padding-left:50px">
            <b>
            Divide: The problem into independent sub-problems.
            </b>
            <br>
            <b>
            Solve: Each sub-problem.
            </b>
            <br>
            <b>
            Merge: The solved sub-problems into the final solution.
            </b>

            </p>
            <p style="font-size:16px">
                <p style="font-size:16px; text-align:start; padding-left:20px">
                <b>Best Case Time Complexity:</b> O(n log n)
                <br>
                <b>Worst Case Time Complexity:</b> O(n log n)
                <br>
                <b>Average Time Complexity:</b> O(n log n)
                <br>
                <b>Auxiliary Space:</b> O(n)
            </p>`,


        }
    ]
    }).start();

  


    
}

window.addEventListener('load',()=>{ 
    setTimeout(() => {
        preloader.classList.add("loaded")
        start_journey()
    }, 100);   
})







