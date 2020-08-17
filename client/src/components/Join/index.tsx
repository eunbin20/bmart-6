import React from 'react';
import { Form, Field } from 'react-final-form';
import * as S from './style';

export default function Join() {
  const onSubmit = () => {
    console.log('123');
  };
  return (
    <>
      <S.Header>Bmart</S.Header>
      <S.InputContainer>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <>
              <Field name="email">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="email" placeholder="이메일" />
                    <S.InputError visible={meta.error ? true : false}>{meta.error}</S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <Field name="name">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="text" placeholder="이름" />
                    <S.InputError visible={meta.error ? true : false}>{meta.error}</S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <Field name="nickname">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="nickname" placeholder="닉네임" />
                    <S.InputError visible={meta.error ? true : false}>{meta.error}</S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="password" placeholder="비밀번호" />
                    <S.InputError visible={meta.error ? true : false}>{meta.error}</S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <S.PushButton onClick={handleSubmit}>arrow_right</S.PushButton>
            </>
          )}
        />
      </S.InputContainer>
      <S.Footer />
    </>
  );
}

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const onSubmit = async (values) => {
//   await sleep(300);
//   window.alert(JSON.stringify(values, 0, 2));
// };

// const App = () => (
//   <Styles>
//     <h1>React Final Form Example</h1>
//     <h2>Password / Confirm Validation</h2>
//     <a href="https://final-form.org/react" target="_blank" rel="noopener noreferrer">
//       Read Docs
//     </a>
//     <Form
//       onSubmit={onSubmit}
//       validate={(values) => {
//         const errors = {};
//         if (!values.username) {
//           errors.username = 'Required';
//         }
//         if (!values.password) {
//           errors.password = 'Required';
//         }
//         if (!values.confirm) {
//           errors.confirm = 'Required';
//         } else if (values.confirm !== values.password) {
//           errors.confirm = 'Must match';
//         }
//         return errors;
//       }}
//       render={({ handleSubmit, form, submitting, pristine, values }) => (
//         <form onSubmit={handleSubmit}>
//           <Field name="username">
//             {({ input, meta }) => (
//               <div>
//                 <label>Username</label>
//                 <input {...input} type="text" placeholder="Username" />
//                 {meta.error && meta.touched && <span>{meta.error}</span>}
//               </div>
//             )}
//           </Field>
//           <Field name="password">
//             {({ input, meta }) => (
//               <div>
//                 <label>Password</label>
//                 <input {...input} type="password" placeholder="Password" />
//                 {meta.error && meta.touched && <span>{meta.error}</span>}
//               </div>
//             )}
//           </Field>
//           <Field name="confirm">
//             {({ input, meta }) => (
//               <div>
//                 <label>Confirm</label>
//                 <input {...input} type="password" placeholder="Confirm" />
//                 {meta.error && meta.touched && <span>{meta.error}</span>}
//               </div>
//             )}
//           </Field>
//           <div className="buttons">
//             <button type="submit" disabled={submitting}>
//               Submit
//             </button>
//             <button type="button" onClick={form.reset} disabled={submitting || pristine}>
//               Reset
//             </button>
//           </div>
//           <pre>{JSON.stringify(values, 0, 2)}</pre>
//         </form>
//       )}
//     />
//   </Styles>
// );

// render(<App />, document.getElementById('root'));
