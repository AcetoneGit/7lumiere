import { Controller } from "@hotwired/stimulus"
import { Application } from '@splinetool/runtime';

export default class extends Controller {
  connect() {
    const canvas = this.element
    const spline = new Application(canvas)
    spline.load('assets/scene.splinecode')
  }
}
