"use client";

import { useFormState } from 'react-dom';
import React, { FormEvent } from 'react';

import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { MealItemType } from '@/types';
import shareMeal from '@/lib/serverActions';
import FormSubmitButton from '@/components/form/form-submit-button';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, {message: ""})
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
      {state.message && <h2>{state.message}</h2>}
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label='Image Picker' name='imagePicker' />
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <FormSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}