import { Application } from '@splinetool/runtime';

document.addEventListener("turbo:load", () => {
  const canvas = document.getElementById('canvas3d');
  if (canvas) {
    const app = new Application(canvas);
    app.load('https://prod.spline.design/d4inuz5JIo3UYlZs/scene.splinecode')
      .then(() => {

        const testCamera = app.findObjectByName("Test");
        if (testCamera) {
          console.log("J'ai trouvé la caméra Test");
          app.setCamera(testCamera);
        }
      });
  }
});
