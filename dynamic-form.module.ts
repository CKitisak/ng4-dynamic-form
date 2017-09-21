import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent],
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
  providers: [QuestionService, QuestionControlService],
})
export class DynamicFormModule { }
