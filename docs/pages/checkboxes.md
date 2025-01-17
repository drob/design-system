---
title: Checkboxes
layout: variation
section: components
status: Released
description: Use checkboxes when the user can select more than one option from a
  list. Make clear with helper text that this is the case. Use [radio
  buttons](/design-system/components/radio-buttons) when the user can choose
  **only one** option out of a list.
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox">
              <label class="a-label" for="test_checkbox">Default</label>
          </div>

          <br>

          <!--Hover-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox hover" type="checkbox" id="test_checkbox_basic_hover">
              <label class="a-label" for="test_checkbox_basic_hover">Hover</label>
          </div>

          <br>

          <!--Focus-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox focus" type="checkbox" id="test_checkbox_basic_focus">
              <label class="a-label" for="test_checkbox_basic_focus">Focus</label>
          </div>

          <br>

          <!--Selected-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
              <label class="a-label" for="test_checkbox_basic_checked">Selected</label>
          </div>

          <br>

          <!--Disabled-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled>
              <label class="a-label" for="test_checkbox_basic_disabled">Disabled</label>
          </div>

          <br>

          <!--Disabled/selected-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled_selected" disabled checked>
              <label class="a-label" for="test_checkbox_basic_disabled_selected">Disabled/selected</label>
          </div>
        variation_description: ''
        variation_name: Standard checkboxes
        variation_specs: >-
          #### Default checkbox


          * Height: 20 px

          * Width: 20 px

          * Margin right: 10 px

          * Border: 1 px, Gray 60 (#919395)

          * Background: White (#ffffff)

          * Avenir Next Regular, 16 px, Black (#101820)


          <h3 class="h4">Hover</h3>


          * Border: 2 px, Pacific (#0072ce)


          #### Focus


          * Border: 2 px, Pacific (#0072ce)

          * Outline: Dotted 1px, Pacific (#0072ce)

          * Outline offset: 1px


          #### Selected


          * Border: 1 px, Gray 60 (#919395)

          * Minicon: 18 px, Black (#101820)


          #### Disabled


          * Border: 1 px, Gray 60 (#919395)

          * Background: Gray 10 (#e7e8e9)

          * Avenir Next Regular, 16 px, Gray (#5a5d61)


          #### Spacing


          Text spacing should inform spacing of checkboxes, and a checkbox should be vertically centered with the first line of text in an option.
    variation_group_name: Types
  - variation_group_description: ''
    variations:
      - variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox
          m-form-field__lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default">
              <label class="a-label" for="test_checkbox_lg_default">Label</label>
          </div>

          <br>


          <!--Hover-->

          <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
              <input class="a-checkbox hover" type="checkbox" id="test_checkbox_lg_hover">
              <label class="a-label" for="test_checkbox_lg_hover">Hover</label>
          </div>

          <br>


          <!--Focus-->

          <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
              <input class="a-checkbox focus" type="checkbox" id="test_checkbox_lg_focus">
              <label class="a-label" for="test_checkbox_lg_focus">Focus</label>
          </div>


          <br>


          <!--Selected-->

          <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_checked" checked>
              <label class="a-label" for="test_checkbox_lg_checked">Selected</label>
          </div>

          <br>


          <!--Disabled-->

          <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_disabled" disabled>
              <label class="a-label" for="test_checkbox_lg_disabled">Disabled</label>
          </div>

          <br>


          <!--Disabled/Selected-->

          <!--

          <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
              <input class="a-checkbox"
                     type="checkbox"
                     id="test_checkbox_lg_disabled"
                     disabled
                     checked>
              <label class="a-label" for="test_checkbox_lg_disabled">Disabled/Selected</label>
          </div>

          -->
        variation_specs: |-
          #### Default

          ##### Target area

          * Minimum height: 50px
          * Background: Gray 10 (#e7e8e9)
          * Padding: 15 px

          ##### Radio button (or checkbox) and text

          * Border: 1 px, Gray 60 (#919395)
          * Background: 20 px x 20 px, White (#ffffff)
          * Avenir Next Regular, 16 px, Black (#101820)

          #### Hover

          ##### Target area

          * Border: 2 px, Pacific (#0072ce)
          * Background: Gray 10 (#e7e8e9)
          * Radio button (or checkbox)

          ##### Checkbox

          * Border: 2 px, Pacific (#0072ce)

          #### Focus

          ##### Target area

          * Border: 2 px, Pacific (#0072ce)
          * Background: Gray 10 (#e7e8e9)
          * Outline: Dotted 1px, Pacific (#0072ce)

          ##### Checkbox

          * Border: 2 px, Pacific (#0072ce)

          #### Selected

          ##### Target area

          * Border: 1 px, Pacific (#0072ce)
          * Background: Pacific 20 (#d6e8fa)

          ##### Checkbox

          * Border: 1 px, Gray 60 (#919395)
          * Background: 14 x 14 px, Pacific (#0072ce)

          #### Disabled

          ##### Checkbox

          * Border: 1 px, Gray 60 (#919395)
          * Background: Gray 20 (#d2d3d5)
          * Avenir Next Regular, 16 px, Gray (#5a5d61)
        variation_description:
          For better usability, consider using checkboxes with
          large target areas. These are easier to interact with (especially on
          smaller screens) and harder to miss. They are especially desirable
          when the form will have heavy mobile usage. Given the amount of real
          estate they occupy, they’re probably not suited for all use cases; for
          example, they may not work well for terms of service agreement
          checkboxes.
        variation_name: Large target area checkboxes
    variation_group_name: Sizes
use_cases: ''
guidelines: >-
  ### Content guidelines


  * Label text should be concise


  ### Stylistic guidelines


  * Text spacing should inform spacing of checkboxes and checkbox should be vertically centered with the first line of text in an option.
behavior: >-
  Selecting the checkbox or touching the label text next to it should toggle the
  state of the checkbox on and off.


  To optimize usability, consider using checkboxes with large target areas. If these won’t fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45px and that it includes the text label.
accessibility: To optimize screen reader accessibility, lay out checkboxes
  vertically rather than horizontally.
last_updated: 2019-09-17T14:30:15.293Z
eyebrow: Form elements
research: ''
---
