const componetImgCard = (i: number, aspecRatio: string) => {
    return `
        <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspecRatio};"> 

            <div class="status-container">
              <div class="spiner"></div>
              <i class="ri-error-warning-line"></i>
              <p class="status-text">Generating...</p>
            </div>

            <img src="./public/test.jpg" class="result-img">

          </div>
    `;
};

export { componetImgCard };
