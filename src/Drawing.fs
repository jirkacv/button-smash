namespace ButtonSmash

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import

open Roughjs
open System

module Drawing =
    let fillStyles = [|
        "hachure"
        "solid"
        "zigzag"
        "cross-hatch"
        //"dots" // dots are very slow for canvas
    |]

    let colors = [|
        "red"
        "green"
        "yellow"
        "orange"
        "blue"
        "black"
        "white"
        "gray"
    |]

    let clearCanvas (roughCanvas: Roughjs.ICanvas) =
        let context = roughCanvas.canvas.getContext_2d()
        context.clearRect (0., 0., roughCanvas.canvas.width, roughCanvas.canvas.height) |> ignore

    let getRandomPointOnCanvas (roughCanvas: Roughjs.ICanvas) =
        let x = Utils.getRandomInteger 0 (roughCanvas.canvas.width |> int)
        let y = Utils.getRandomInteger 0 (roughCanvas.canvas.height |> int)
        (x, y)

    let getPoint (roughCanvas: Roughjs.ICanvas) (point: Roughjs.Point option) =
        match point with
        | Some p -> p
        | None -> getRandomPointOnCanvas roughCanvas

    let getShapeSizeLimits (roughCanvas: Roughjs.ICanvas)  =
        let width = roughCanvas.canvas.width
        let height = roughCanvas.canvas.height

        let maxSide = Math.Floor(width * 0.2) |> int
        let minSide = Math.Floor(width * 0.01) |> int
        (minSide, maxSide)

    let getRandomSmallNumber() =
        Utils.getRandomInteger 1 5

    let getRandomStyle() =
        let style = createEmpty<IOptions>
        style.fillStyle <- Utils.getRandomItemFromArray fillStyles
        style.fill <- Utils.getRandomItemFromArray colors
        style.stroke <- Utils.getRandomItemFromArray colors
        style.strokeWidth <- getRandomSmallNumber()
        style.hachureGap <- getRandomSmallNumber()
        style.roughness <- getRandomSmallNumber()
        style.maxRandomnessOffset <- getRandomSmallNumber()
        style.simplification <- getRandomSmallNumber()
        style.hachureGap <- Utils.getRandomInteger 3 20
        style.hachureAngle <- Utils.getRandomInteger 0 180
        style

    let drawRectangle (roughCanvas: Roughjs.ICanvas) (point: Roughjs.Point option) =
        let (minSide, maxSide) = getShapeSizeLimits roughCanvas
        let (x, y) = getPoint roughCanvas point

        roughCanvas.rectangle (x, y, (Utils.getRandomInteger minSide maxSide), (Utils.getRandomInteger minSide maxSide), getRandomStyle())

    let drawCircle (roughCanvas: Roughjs.ICanvas) (point: Roughjs.Point option) =
        let (minSide, maxSide) = getShapeSizeLimits roughCanvas
        let (x, y) = getPoint roughCanvas point

        roughCanvas.circle(x, y, (Utils.getRandomInteger minSide maxSide), getRandomStyle())

    let drawMethods = [| drawRectangle; drawCircle |]

    let drawRandomShape (roughCanvas: Roughjs.ICanvas) (point: Roughjs.Point option) =
        let method = Utils.getRandomItemFromArray drawMethods
        method roughCanvas point