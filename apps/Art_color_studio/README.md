Color Studio Garden

Crechè Preschool Edition

Color Studio Garden is a colorful, private, offline-first art studio created for the Khaemenes Academy Crechè Preschool repository. Children can draw, color, stamp, explore shapes and symmetry, listen to creative prompts, and save finished artwork directly to their device.

The application is contained in one self-contained index.html file. It does not require an account, server, database, external library, or build process.

Purpose

Color Studio Garden gives young children a welcoming place to experiment with color, movement, shapes, imagination, and early digital-art skills. The interface begins in Little Artist Mode, keeping the simplest preschool tools visible while placing advanced controls inside clearly labeled adult and older-child sections.

The experience is designed to encourage exploration rather than competition. There are no advertisements, public profiles, chat features, external uploads, or social feeds.

Features

Little Artist Mode

The default preschool workspace includes:

Brush

Crayon

Eraser

Sticker Garden

Large color palette

Custom color picker

Brush and sticker resizing

Undo and redo

Clear Art

Page Color

Creative prompts

Read-aloud prompts

Picture guides

Save Picture

More Art Tools

An expandable advanced section adds:

Marker

Pencil

Spray tool

Paint Page

Shape Builder

Circles, squares, triangles, stars, hearts, and lines

Horizontal mirroring

Vertical reflection

Adjustable opacity

Advanced Artist Mode

Private Mini Gallery

Keeps previews of the five newest saved pictures

Stores gallery previews only in the current browser on the current device

Lets a child tap a saved preview to place it back on the canvas

Includes a parent or teacher control for clearing the gallery

Downloads a full-resolution PNG when a picture is saved

Creative Progress

The studio gently tracks:

Current tool

Art moves

Pictures saved

Prompts explored

Overall creative-exploration progress

These values are stored locally and are not transmitted anywhere.

Preschool-Friendly Design

The Crechè Preschool Edition includes:

Large rounded touch targets

Bright, friendly colors

Simple icons and short labels

Finger, mouse, stylus, and trackpad support

A responsive canvas that maintains its proportions

Pointer capture for dependable touch drawing

Child-friendly in-app confirmation panels

A simplified default tool set

Expandable parent and teacher controls

Reduced-motion support

Clear keyboard focus indicators

Accessible pressed-state information for selectable tools

Privacy and Local Storage

Color Studio Garden is designed as a local-first application.

Artwork is created in the browser.

Saved PNG files download directly to the user’s device.

Mini-gallery previews remain in browser storage.

A recent drawing draft is stored locally so work can be restored after refreshing the page.

Creative statistics remain on the same device and browser.

No account is required.

No analytics, advertising, tracking scripts, or cloud APIs are included.

Clearing browser data, using private-browsing mode, changing browsers, or moving to another device may remove local drafts, gallery previews, and progress statistics.

Read-Aloud Prompts

The Read It button uses the browser’s built-in speech-synthesis feature. Available voices vary by operating system and browser. No recorded child audio is collected or stored.

Repository Structure

/
├── index.html   # Complete Color Studio Garden application
└── README.md    # Project documentation

No additional packages or assets are required.

Run Locally

Download or clone the repository.

Open index.html in a modern web browser.

Begin drawing.

A local web server is optional. For example:

python3 -m http.server 8000

Then open http://localhost:8000 in a browser.

Publish with GitHub Pages

Upload index.html and README.md to the repository root.

Open the repository’s Settings.

Select Pages.

Choose the branch containing the files, usually main.

Choose the repository root as the publishing folder.

Save the GitHub Pages settings.

Because the application is static and self-contained, it does not need a backend or build command.

Browser Support

The application is intended for current versions of:

Chrome

Edge

Firefox

Safari

Mobile Safari

Chrome for Android

Browser support for downloads, local storage, emoji stamps, and speech voices may differ slightly by device.

Adult Guidance

Young children should use the application with age-appropriate adult supervision, especially when:

Downloading files

Clearing artwork or the mini gallery

Opening advanced tools

Managing browser storage

Using the application on a shared device

The Parent & Teacher Tools section includes picture naming, saving information, and gallery-management controls.

Customization

The app can be customized directly inside index.html.

Common areas include:

COLORS — palette colors

STAMPS — sticker choices

PROMPTS — creative prompts and guide images

CSS variables in :root — theme colors

Background color choices

Gallery limit

Brush and sticker size ranges

Keep a backup before making structural JavaScript changes.

Launch Checklist

Before publishing an updated version, test:

Drawing with a mouse and finger

Brush, crayon, eraser, marker, pencil, and spray tools

Sticker placement and resizing

Undo and redo

Shape preview and placement

Mirror and Reflect

Page Color and Paint Page

Clear Art confirmation

Prompt generation, Read It, and Picture Guide

PNG download

Mini-gallery save, reload, and clear controls

Draft restoration after refreshing

Portrait and landscape mobile layouts

Keyboard focus and reduced-motion settings

Technology

HTML5

CSS3

Vanilla JavaScript

Canvas 2D API

Pointer Events

Web Speech API

LocalStorage

PNG export through Canvas data URLs

No framework or third-party dependency is used.

Copyright

Copyright © 2026 Jennifer Kay Pearl, Verve N Veda, and Khaemenes Academy.

All Rights Reserved.

This project is proprietary educational software. Permission is not granted to copy, modify, redistribute, rebrand, sell, sublicense, train models on, or create derivative works from the application or its original materials unless written authorization is provided by the copyright holder or a separate repository license expressly permits it.
