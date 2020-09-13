import React from "react";
import { render } from "react-dom";
import Autor from "./Autor";
import Opis from "./Opis";
import Isecak from "./Isecak";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Autor
        adresaSlike="data:image/jpeg;base64,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"
        ime="Andrija Gajic"
        opis="Andrija Gajic is young web developer. He is interested in web development and python programming, in his free time he is making blogs to help people learn."
      />
      <Opis opis="In this blog we will discover 5 ways to reverse a string in javascript" />
      <Isecak
        imeMetode="1. Array.reverse()"
        opisPristupa="For this way we will use Array method by converting string to array first using split(''), then
        using method reverse(), reverse it, then using method join('') put it back together in string.This approach is
        easiest and is recommended, but sometimes on interview you mustn't use reverse() method to solve this
        problem."
        kodES6="const reverseStr1 = str => str.split('').reverse().join('');"
        kodES5="function reverseStr1(str){/n
          &tab;return str.split('').reverse().join('');/n
        }"
      />
      <Isecak
        imeMetode="2. Classic for loop"
        opisPristupa="In this way we will use for loop to iterate through string and place charachters in
        new string, then we will return that string. Loop starts at the end of the original string so we
        can put them in new string in reversed way."
        kodES6="const reverseStr2 = str => {/n
          &tab;let newStr = '';/n
          &tab;for (let i = str.length - 1; i >= 0; i--) {/n
          &tab;&tab;newStr += str[i];/n
          &tab;}/n
          /n
          &tab;return newStr;/n
        }"
        kodES5="function reverseStr2 (str) {/n
          &tab;var newStr = '';/n
          &tab;for (var i = str.length - 1; i >= 0; i--) {/n
            &tab;&tab;newStr += str[i];/n
          &tab;}/n
          /n
          &tab;return newStr;/n
        }"
      />
      <Isecak
        imeMetode="3. For of loop"
        opisPristupa="Ahhh, classic for loop, what's better than that? Well, if you are working in C
        for loop is just fine, but since we are using javascript, why not use modern syntax? For of loop
        has the same approach but it looks nicer than for loop. For es5 we have alternative forEach"
        kodES6="const reverseStr3 = str => {/n
          &tab;let newStr = '';/n
          &tab;for (let char of str) {/n
            &tab;&tab;newStr = char + newStr;/n
          &tab;}/n
          /n
          &tab;return newStr;/n
        }"
        kodES5="function reverseStr3(str) {/n
          &tab;var newStr = '';/n
          &tab;str.split('').forEach(function(el){/n
            &tab;&tab;newStr = el + newStr/n
          &tab;})/n
          &tab;return newStr/n
        }"
      />
      <Isecak
        imeMetode="4. reduce method"
        opisPristupa="One of the most interesting methods of js in my opinion. It collects charachter
        by character and adds it to a string. This method works with numbers too. So you can perform addition
        for expample"
        kodES6="const reverseStr4 = str => {/n
          &tab;return str.split('').reduce((reversed, char) => char + reversed);/n
        }"
        kodES5="/* ES5 doesn't support reduce method */"
      />
      <Isecak
        imeMetode="5. reduceRight method"
        opisPristupa="Very simillar to reduce method, you can probably guess what is doing different. 
        It is going from right to left"
        kodES6="const reverseStr5 = str => {/n
          &tab;return str.split('').reduceRight((reversed, char) => reversed + char);/n
        }"
        kodES5="/* ES5 doesn't support reduceRight method */"
      />
      <Footer
        igicon="data:image/png;base64,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"
        eicon="data:image/png;base64,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"
        ghicon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAaVBMVEX///8XFRUAAAD7+/sUEhIOCwt8fHz19fXi4uLw8PDBwcF1dXXZ2dmhoaERDw/4+Pjp6enMzMxDQ0NiYmIfHh5oaGhJSUmIiIi1tbW7u7vT09MnJiavr69OTk6Tk5OoqKhXVlY9PDwzMjJKCtKbAAAFEUlEQVRoge1a2ZaiMBCVQJA1GEGxQVH4/48cQFlSCWaBnjlnDvetbYqbpZabCofDjh07duzYseO/hO17wbNye1S34HT8S7xRHNYI4Oo+vV+mTW5hx4QtFg7ufszp7xHTS8vgWAsgCFl59Bu8ye38hXdkf20+9eR+5pZZBGdzcnpVIu6BULqdyyWhOvGbvNqIOWj9RxOo3MLf7FDmXCJgFK9m9mrtKfdw0CVZx0wzM+YWqD6tYQ70/Atwlys8/cdkmydgy9jZbuuYV3CvnHPPbbbmhbVinwegxqCWH8sZs6M1//nT6KVP/ZpFFcosvkgv0LZ1Nctmz+on1XjOfDl59HmV1sy+al7uxemUkZl1occczTMJCvrf/EpCTlD5tPtHq5k5sbTSmn2ebzQaf47x+52YUWaYvB9rfoYHC2bkrg71fLktXE//8POerE7dKr4FlAa3uApfTf9jPJsdszxIQzwwewVGXTxyCtRvq41/3JTJ2CXzgoetTO0yNQM91Qc9IGXfcFe187BjZjghZKhxozpt1m4DauVXnEAImSz4haXGjZpZBdSBXnC8wbiZNaYGGSxgNg8uRdgw96CLihnlJBHydakD/h0qKc2FZgRpi6yAy7gqDmNnBFoZnGSgvyiteMEZ5frMbM3t4CC5ZoDjxbWRnvagulBYuxSG1s2EmXcZ+eL5ICJxbdgo8WBiSuUWW+x0h5RVVKSRhSiMSF15M4FLijJdDAwcbNyYiiC1zM9g3teo8gA+3GxZ9QI7hEJT5kMCHFaqih+A2qBqfcBIS4VZJFfwvLGDH2w4C0l0HeFQV1DDWehSr9jrhqyjVirxYupML51B6lXBZWlRww1yMuM+EJeSZQv4AmdZfYUygEvJsjjlaqaalBQgh2+SNfH0y+wSUrh+PxKDJxQpV8PNhgcJC8m6SZwUllosAM7BkXoNP1jDLA7SaLt8svILA7sNLyMf5w4BCnkxNLARoIYNJ4Uu9Z0/s2xxBJDro26zoRFRUO8AlDv4EJXTPfSP7nSsye0heHhSyw8xN20LnbVcjQq6q0q7BitOb1hq7Hcs6GkSR8l0PKnh6R4RI1fxkB29RC1FxU7pEJL4GsfhSI5QrtDbpqnwZkqeyj74tKP7FBoNvcmO/BwXXzK6T/Ns4UpMWex8Qhs/2qHmxWm6bmp3oHlVAeXW3qN391oi3rGHSasen5LmM+2yq3Nx1Exu45CuQ8pRF2OTdt2ku/uWtwnpsl9OWanjiGrZTbzQXyyW8Bj3tzsonZi0KEwOUO+zk9YpflNDpR2wj7zz/E5A6Kx86h9BMq1kOAqrTg1Htj1xE3HPUZSIhrHqybtkdK1eUl1oG+DEcbrvIcSrZzdLXqZddKMxjz3av9L8UIR1ZpX1JVjIalAFDsBYW9yNVaRP/PahihOPekm0VIE4ifGGekjPMPQX8Ln/8xm2tTA8VEsdJa6/+Rm40RX6UEamhBB9cVUxtaGMP14H7lQhOoTUxk0JfwgpVN6lJVNEjULzc+p1zKhNeI88z4uCfCFKBdQrmNs1H2UDGe/yFhrbnIc7K1pAPS7caUSRmqz/LgYqLUVqZH46nlCU7E3dQqAy1A56ad+XiHB05xNXoV50CH3QeiKXU+MtP706JM9y0F1L1GPeRfUGuzyHHzvvmX+nxqi5rQjmBdj3TnI6S3chOeqK+WPjGY8o8oYsFf7jC5+rVR88SWB/qfvJ9iu9Y8eOHTt27PjH+AOtvTpJClWwgwAAAABJRU5ErkJggg=="
        igAdresa="https://www.instagram.com/webcode.rs/?hl=sr"
        eAdresa="andrijagajicbusiness@gmail.com"
        githubAdresa="https://github.com/gajojr"
        ghAdresaProjekta="https://github.com/gajojr/STRING-REVERSAL"
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
