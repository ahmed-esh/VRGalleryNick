AFRAME.registerComponent('arrange-gallery', {
    init: function () {
        let el = this.el
        let artworks = el.querySelectorAll('.artwork')
        let exit = document.getElementById('exit')
        let next = document.getElementById('next')
        let camera = document.getElementById('camera')
        let half = Math.ceil(artworks.length / 2)
        let artArray = Array.prototype.slice.call(artworks)
        let leftSide = artArray.splice(0, half)
        let rightSide = artArray.splice(-half)
        let xSpacing = 5
        let wallHeight = 4
        
        let roomLength = xSpacing * leftSide.length
        let startPosition = (roomLength / 2)

        // Left Wall
        let wallLeft = document.createElement('a-box')
        wallLeft.setAttribute('position', {
            x: startPosition,
            y: wallHeight/2,
            z: -5.2
        })
        wallLeft.setAttribute('width', roomLength + 10)
        wallLeft.setAttribute('height', wallHeight)
        wallLeft.setAttribute('depth', 0.1)
        wallLeft.setAttribute('static-body', '')
        wallLeft.setAttribute('color', '#808080')
        el.appendChild(wallLeft)

        // Right Wall
        let wallRight = document.createElement('a-box')
        wallRight.setAttribute('position', {
            x: startPosition,
            y: wallHeight/2,
            z: 5.2
        })
        wallRight.setAttribute('width', roomLength + 10)
        wallRight.setAttribute('height', wallHeight)
        wallRight.setAttribute('depth', 0.1)
        wallRight.setAttribute('static-body', '')
        wallRight.setAttribute('color', '#808080')
        el.appendChild(wallRight)

        // Back Wall
        let wallBack = document.createElement('a-box')
        wallBack.setAttribute('position', {
            x: roomLength + 5,
            y: wallHeight/2,
            z: 0
        })
        wallBack.setAttribute('width', 0.1)
        wallBack.setAttribute('height', wallHeight)
        wallBack.setAttribute('depth', 10.4)
        wallBack.setAttribute('static-body', '')
        wallBack.setAttribute('color', '#808080')
        el.appendChild(wallBack)

        // Front Wall
        let wallFront = document.createElement('a-box')
        wallFront.setAttribute('position', {
            x: -5,
            y: wallHeight/2,
            z: 0
        })
        wallFront.setAttribute('width', 0.1)
        wallFront.setAttribute('height', wallHeight)
        wallFront.setAttribute('depth', 10.4)
        wallFront.setAttribute('static-body', '')
        wallFront.setAttribute('color', '#808080')
        el.appendChild(wallFront)

        exit.setAttribute(
            'position', 
            {x: roomLength, y: 1.5, z: xSpacing / 2})

        if (next) {
            next.setAttribute(
                'position', 
                {x: roomLength, y: 1.5, z: xSpacing / 2 * -1})     
        }

        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].setAttribute('position', 
                                  { x: i * xSpacing, 
                                    y: 1.5, 
                                    z: -5 })
        }
        for (let i = 0; i < rightSide.length; i++) {
            rightSide[i].setAttribute('position', 
                                  { x: i * xSpacing, 
                                    y: 1.5, 
                                    z: 5 })
            rightSide[i].setAttribute('rotation', '0 -90 0')
        }

        camera.setAttribute('position', {x: 0, y: 0, z: 4})

    }
});
