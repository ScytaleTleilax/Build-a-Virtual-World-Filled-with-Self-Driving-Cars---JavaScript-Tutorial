class GraphEditor {
    constructor(canvas, graph) {
        this.canvas = canvas;
        this.graph = graph;
        this.ctx = this.canvas.getContext("2d");
        this.selected = null;
        this.hovered = null;

        this._addEventListeners();
    }

    _addEventListeners() {
        this.canvas.addEventListener('mousedown', (evt) => {

            if (evt.button == 2) { //right click
                if (this.hovered) {
                    this._removePoint(this.hovered);
                }
            }
            if (evt.button == 0) { //left click
                const mouse = new Point(evt.offsetX, evt.offsetY);
                if (this.hovered) {
                    this.selected = this.hovered;
                    return;
                }
                this.graph.tryAddPoint(mouse);
                this.selected = mouse;
            }
        })

        // a way to determine the outerbounds of threshold is needed BEFORE ading a point
        this.canvas.addEventListener('mousemove', (evt) => {
            const mouse = new Point(evt.offsetX, evt.offsetY);
            this.hovered = getNearestPoint(mouse, this.graph.points, 25);

        })

        this.canvas.addEventListener('contextmenu', (evt) => {
            evt.preventDefault();
        })
    }
    _removePoint(point) {
        this.graph.removePoint(point);
        this.hovered = null;
        if (this.selected === point) {
            this.selected = null;
        }
    }
    display() {
        this.graph.draw(this.ctx);
        if (this.hovered) {
            this.hovered.draw(this.ctx, {
                fill: true
            });
        }
        if (this.selected) {
            this.selected.draw(this.ctx, {
                outline: true
            });
        }
    }
}