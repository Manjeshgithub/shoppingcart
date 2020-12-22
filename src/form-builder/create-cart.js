import items from "../lists/cart-items";
/**
 * Builds all form elements
 * @returns {void}
 */
function buildAll() {
    buildItem();
}

/**
 * Builds Item
 * @returns {void}
 */
function buildItem() {
    console.log(items);
    const $table = $("<table></table>");
    const $trth = $("<tr></tr>");
    const $thone = $("<th></th>", {
        text: "Items",
        class: "title"
    });
    const $thtwo = $("<th></th>", {
        text: "Quantity",
        class: "title"
    });
    const $ththree = $("<th></th>", {
        text: "Price",
        class: "title"
    });
    $trth.append($thone);
    $trth.append($thtwo);
    $trth.append($ththree);
    $table.append($trth);

    const $tr = $("<tr></tr>");
    const $itemtd = $("<td></td>");
    const $qtnytd = $("<td></td>");
    const $pricetd = $("<td></td>");

    const $imgDiv = $("<div></div>", {
        class: "image"
    });
    const $img = $("<img>", {
        class: "imgClass",
        src: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        alt: ""
    });
    const $descDiv = $("<div></div>", {
        class: "description"
    });
    const $descSpan = $("<span></span>", {
        class: "description",
        text: "add description to your item"
    });
    const $btnDiv = $("<div></div>", {
        class: "buttons"
    });
    const $btnSpan = $("<span></span>", {
        class: "delete-btn"
    });
    const $qtnyDiv = $("<div></div>", {
        class: "quantity"
    });
    const $plusButton = $("<button></button>", {
        class: "plus-btn",
        type: "button"
    });
    const $plusImg = $("<img>", {
        src: "./src/img/plus.svg",
        alt: ""
    });
    const $qtnyInput = $("<input>", {
        type: "text",
        name: "name",
        value: "0"
    });
    const $minusButton = $("<button></button>", {
        class: "minus-btn",
        type: "button"
    });
    const $minusImg = $("<img>", {
        src: "./src/img/minus.svg",
        alt: ""
    });
    const $priceDiv = $("<div></div>", {
        class: "total-price"
    });
    const $priceSpan = $("<span></span>", {
        text: "$549"
    });
    $imgDiv.append($img);
    $itemtd.append($imgDiv);
    $descDiv.append($descSpan);
    $itemtd.append($descDiv);
    $btnDiv.append($btnSpan);
    $itemtd.append($btnDiv);
    $plusButton.append($plusImg);
    $minusButton.append($minusImg);
    $qtnyDiv.append($plusButton);
    $qtnyDiv.append($qtnyInput);
    $qtnyDiv.append($minusButton);
    $priceDiv.append($priceSpan);
    $qtnytd.append($qtnyDiv);
    $pricetd.append($priceDiv);
    $tr.append($itemtd);
    $tr.append($qtnytd);
    $tr.append($pricetd);
    $table.append($tr);

    $("#shopping-cart").append($table);


    items.forEach((item) => {
        const $squareDiv = $("<div></div>", {
            class: "square"
        });
        const $contentDiv = $("<div></div>", {
            class: "content"
        });
        const $tableDiv = $("<div></div>", {
            class: "table inner-content"
        });
        const $tableRowDiv = $("<div></div>", {
            style: "display:table-row"
        });
        const $tableCellDiv = $("<div></div>", {
            class: "table-cell ribbon",
        });
        const $tableCellSpan = $("<span></span>", {
            class: "discount-ribbon",
            text: `${item.discount}% off`
        });
        const $tableCellImgDiv = $("<div></div>", {
            class: "table-cell"
        });
        const $tableCellImg = $("<img>", {
            class: "rs",
            src: item.image
        });
        const $tableLower = $("<div></div>", {
            class: "table lower-cell"
        });
        const $tableLowerCell = $("<div></div>", {
            class: "table-cell cart"
        });
        const $tableCellSpan1 = $("<span></span>", {
            text: item.name,
            style: "padding-right: 10px;width: 120px;display: inline-block;"
        });
        const $tableCellSpan1Inner = $("<span></span>", {   
            style:'color:red;text-decoration:line-through',
            text: item.price.display
        });
        const $tableCellSpan2= $("<span></span>", {
            text: item.price.actual
        });
        const $tableCellBtn= $("<button></button>", {
            class: "add-cart",
            text: "Add to cart"
        });
        $tableCellSpan1.append($tableCellSpan1Inner);
        $tableLowerCell.append($tableCellSpan1);
        $tableLowerCell.append($tableCellSpan2);
        $tableLowerCell.append($tableCellBtn);
        $tableLower.append($tableLowerCell);
        $tableCellImgDiv.append($tableCellImg);
        $tableCellDiv.append($tableCellSpan);
        $tableRowDiv.append($tableCellDiv);
        $tableRowDiv.append($tableCellImgDiv);
        $tableDiv.append($tableRowDiv);
        
        $contentDiv.append($tableDiv);
        $contentDiv.append($tableLower);
        $squareDiv.append($contentDiv);
        $("#cartItem").append($squareDiv);
    });

   


}

export default {
	buildAll
};

