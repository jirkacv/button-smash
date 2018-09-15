namespace ButtonSmash


open Fable.Core
open Fable.Core.JsInterop
open Fable.Import

open Roughjs
open System

module App =
    let controller = Browser.document.getElementById "controller"

    let canvas = Browser.document.getElementsByTagName_canvas().[0]

    let context = canvas.getContext_2d()

    let roughCanvas = RoughCanvas canvas None

    let blockedKeys = [|
        18 // alt
        27 // esc
        93 // menu key
     |]

    let clearingKeys = [|
        32 // space
    |]

    let helpKeys = [|
        72 // h
        104 // H
    |]

    let shouldBlockKey (e: Browser.KeyboardEvent): bool =
        Array.contains (e.which |> int) blockedKeys

    let isClearingKey (e: Browser.KeyboardEvent): bool =
        Array.contains (e.which |> int) clearingKeys

    let isHelpKey (e: Browser.KeyboardEvent): bool =
        Array.contains (e.which |> int) helpKeys

    let printHelp() =
        context.font <- "20px Comic Sans"
        context.fillText("Smash buttons to draw, press space to clear :) ", 10., 30.)

    let handleKey (e: Browser.KeyboardEvent) =
        match e with
        | e when (e |> shouldBlockKey) = true ->
            e.preventDefault()
            false
        | e when (e |> isClearingKey) = true ->
            Drawing.clearCanvas roughCanvas
            true
        | e when (e |> isHelpKey) = true ->
            printHelp()
            true
        | _ ->
            (Drawing.drawRandomShape roughCanvas None) |> ignore
            true

    let handleClick (e: Browser.MouseEvent) =
        (Drawing.drawRandomShape roughCanvas (Some (e.x |> int, e.y |> int))) |> ignore
        true

    let handleDblClick (e: Browser.MouseEvent) =
        e.preventDefault()
        Drawing.clearCanvas roughCanvas
        true

    let setCanvasSizeFromWindowSize() =
        let height = controller.clientHeight 
        let width = controller.clientWidth

        let image = context.getImageData (0., 0., width, height)

        canvas.height <- height
        canvas.width <- width

        context.putImageData (image, 0., 0.)

    let handleResize (e: Browser.UIEvent) =
        setCanvasSizeFromWindowSize()

    let init() =
        controller.onkeypress <- handleKey
        controller.onclick <- handleClick
        // controller.ondblclick <- handleDblClick
        controller.oncontextmenu <- handleDblClick
        Browser.window.onresize <- handleResize

        setCanvasSizeFromWindowSize()

        printHelp()


    init() |> ignore