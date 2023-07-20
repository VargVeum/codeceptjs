# codeceptjs

> # For opening project 

##### 1. Create folder on desktop for project (in terminal)
~~~
mkdir codecept && cd codecept
~~~
##### 2. Clone test project from GitHub repo
~~~
git clone https://github.com/VargVeum/codeceptjs.git
~~~
##### 3. Open downloaded folder in terminal
~~~
cd codeceptjs
~~~
##### 4. Install CodeceptJS to downloaded folder with tests
~~~
npx create-codeceptjs .
~~~
> # Installation guide: 
https://codecept.io/quickstart/

> # Run tests on chosen environment

IMPORTANT: For launch on different environment need to use one of this command, relative to environment & config files:

For running UI tests:
~~~
npx codeceptjs run --reporter mochawesome
~~~

> # Generate Mochawesome report

After launching tests via NPM command in terminal report will be automatically generated.

Link for HTML report will be described in terminal
Example: 
~~~
[mochawesome] Report HTML saved to C:\Users\User\Desktop\codecept\codeceptjs\mochawesome-report\mochawesome.html
~~~
Copy and paste this link in browser URL for check test results


