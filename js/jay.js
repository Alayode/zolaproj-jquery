/**
 * Created by azuramei on 2014/02/26.
 */

//book_url = "http://api-staging.bookish.com/search/api/v1/meta?&apiKey=lta56t7bmq5uzp653vu1ttij&token=1ebcc98f-c233-4076-9f8c-8f3cf5bc216d&query=umineko&page=1&numPerPage=25"

function searchRequest(val){
    var book_url = "http://api-staging.bookish.com/search/api/v1/meta"
    var data_details = {

        "apiKey" : "lta56t7bmq5uzp653vu1ttij",
        "token" : "1ebcc98f-c233-4076-9f8c-8f3cf5bc216d",
        "query" : val,
        "page" : "1",
        "numPerPage" : "25"
    }

    $.ajax({
        type:'GET',
        url:book_url,
        contentType:"application/json",
        data: data_details,
        dataType: "json",
        success: function(response){
            amegafuttou(response);

      console.log(response);
        }
    })



}