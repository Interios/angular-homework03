# AngularHomework03

stackblitz demo: https://stackblitz.com/github/Interios/angular-homework03

1) What is the difference between structural and attributive directives?

Атрибутивные директивы меняют поведение элемента, к которому они применяются. Например, директива ngClass позволяет установить для элемента класс CSS. При этом сама директива применяется к элементу в виде атрибута: [ngClass]={flag: true}

Структурные директивы изменяют структуру DOM с помощью добавления или удаления html-элементов. Рассмотрим три структурных директивы: ngIf, ngSwitch и ngFor.

2) What is trackByFn?

trackByFn задаётся как функиця возращающая результат над текущим обьектом, используется обычно в связке ngFor.
Если trackBy задается, Angular отслеживает изменения по возвращаемому значению.

3) What is the difference between ngIf and display: none?

display: none является свойством в стилях, а ngIf явно вмешивается в структуру DOM

4) Explain decimal pipe

Pipes представляют специальные инструменты, которые позволяют форматировать отображаемые значения. Например, нам надо вывести определенную дату:
DecimalPipe: задает формат числа
example:
.ts -> pi = 3.1415
.html -> {{ pi | number : '1.0-2' }}
Ouput -> 3.14



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
