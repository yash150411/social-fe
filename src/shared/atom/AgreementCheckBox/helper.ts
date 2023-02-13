export const CONTAINER_HEGHT = 400;
export const ZOOM_ACTIONS = {
  ZOOM_IN: 'zoom_in',
  ZOOM_out: 'zoom_out'
};

export const renderPDFPage = (
  page?: any,
  num?: any,
  canvasContainer?: any,
  scaleType = ZOOM_ACTIONS.ZOOM_IN,
  canvasScale = 1
) => {
  let viewport = page.getViewport({ scale: canvasScale || 1 });

  let wrapper = document.createElement('div');

  wrapper.className = 'canvas-wrapper';
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  canvas.id = `canvas_${num}`;
  //@ts-ignore
  canvas.index = num;
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);

  if (canvasScale > 1) {
    canvas.style.marginLeft = 200 * canvasScale + 'px';
    setTimeout(() => {
      const scrollBarWidth = canvasContainer.offsetWidth - canvasContainer.clientWidth;
      canvasContainer.scrollLeft += scrollBarWidth / 2;
      canvasContainer.clientWidth = 1000;
    }, 100);
  }

  const renderContext = {
    canvasContext: ctx,
    viewport: viewport
  };

  wrapper.appendChild(canvas);
  //@ts-ignore

  canvasContainer.appendChild(wrapper);
  // newCtx?.scale(canvasScale, canvasScale);
  // newCtx?.save();

  const c = page.render(renderContext);
  return canvas;
};

export const loadPDF = (url: string, id: any) => {
  //@ts-ignore
  const PDFJS = window.PDFJS;

  return new Promise(async (res, rej) => {
    const canvasContainer = document.getElementById(id);

    const allPages: Array<any> = [];
    //@ts-ignore
    PDFJS.getDocument(url).promise.then(async (pdf) => {
      //@ts-ignore
      let canvasArray = [];
      for (let num = 1; num <= pdf.numPages; num++) {
        const c = await pdf
          .getPage(num)
          //@ts-ignore
          .then((page) => {
            allPages.push(page);
            renderPDFPage(page, num, canvasContainer);
          });
        //@ts-ignore
        canvasArray = [...canvasArray, c];
      }
      //@ts-ignore
      return res({ contaners: canvasArray, pages: pdf.numPages, allPages });
    });
  });
};
