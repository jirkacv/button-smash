namespace ButtonSmash


open Fable.Core
open Fable.Core.JsInterop
open Fable.Import

open Roughjs
open System

module App =
    let canvas = Browser.document.getElementsByTagName_canvas().[0]
    let roughCanvas = RoughCanvas canvas None

    let blockedKeys = [|
        18 // alt
        27 // esc
        93 // menu key
     |]

    let clearingKeys = [|
        32 // space
    |]

    let shouldBlockKey (e: Browser.KeyboardEvent): bool =
        Array.contains (e.which |> int) blockedKeys

    let isClearingKey (e: Browser.KeyboardEvent): bool =
        Array.contains (e.which |> int) clearingKeys

    let handleKey (e: Browser.KeyboardEvent) =
        match e with
        | e when (e |> shouldBlockKey) = true ->
            e.preventDefault()
            false
        | e when (e |> isClearingKey) = true ->
            Drawing.clearCanvas roughCanvas
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

    let init() =
        let controller = Browser.document.getElementById "controller"
        controller.onkeypress <- handleKey
        controller.onclick <- handleClick
        // controller.ondblclick <- handleDblClick
        controller.oncontextmenu <- handleDblClick

        canvas.height <- Browser.window.innerHeight
        canvas.width <- Browser.window.innerWidth

        let context = canvas.getContext_2d()
        context.font <- "20px Comic Sans"
        
        context.fillText("Smash buttons to draw, press space to clear :) ", 10., 30.)


    init() |> ignore