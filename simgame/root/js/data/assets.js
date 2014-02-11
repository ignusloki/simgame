assets = {
    bouncycube: {
        framerate: 10,
        images: ["res/sprites/bouncycube.png"],
        frames: [
            [0, 0, 76, 72, 0, -236, -222],
            [76, 0, 76, 69, 0, -236, -225],
            [152, 0, 76, 67, 0, -236, -227],
            [228, 0, 76, 66, 0, -236, -228]
        ],
        animations: {
            bounce: [0, 1, 2, 3, 2, 1],
            static: [0]
        }
    },
    chair: {
        framerate: 1,
        images: ["res/sprites/chair.png"],
        frames: [
            [0, 0, 64, 128, 0, -251, -174]
        ],
        animations: {
            static: 0
        }
    }
};