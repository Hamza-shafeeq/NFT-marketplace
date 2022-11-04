import "./TextImageSection2.css";


function TextImageSection2(props) {
  return (
    <>
      <div class="TextImageSection2-container">
        <div class="TextImageSection2-text">
          <p class="ti2-text">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast.
          </p>
          <p class="ti2-text">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast.
          </p>
        </div>

        <div class="TextImageSection2-image">
            <img src={props.img2} class ="ti2-img"></img>
        </div>
      </div>
    </>
  );
}

export default TextImageSection2;
