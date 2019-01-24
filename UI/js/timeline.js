const del = document.querySelectorAll( '.remove' );


//Delete Post
del.forEach( function( item ){
    item.onclick = function(){
        let id = this.parentNode.parentNode.id;
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
          }
        };
        xhr.open( "POST", "Functions.php" );
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send( "delete_id=" + id )
    }
});

//Pagination
{
    let next = document.querySelector( '#next' );
    let prev = document.querySelector( '#prev' );
    let page;

    next.onclick = function(){
        page = 1;
    }
    
    prev.onclick = function(){
        page = -1;
    }
    
    if ( page != null ){
        xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            }
        };
        xhr.open( "POST", "../api/image/Read.class.php" );
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send( "page=" + page );
    }
    
    
}