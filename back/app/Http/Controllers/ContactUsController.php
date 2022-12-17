<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Models\ContactUs;
use App\Jobs\emailMassive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
//use Twilio\Rest\Client;
use Exception;
class ContactUsController extends Controller
{
    public function store(Request $request)
    {

        $rules = [
            'email' => 'required|string|email|max:255|unique:contact_us',
        ];

        $messages = array(
            'email.required|unique:contact_us' => 'email ya fue creado.',
        );

        $validator = Validator::make($request->all(), $rules, $messages);
        if($validator->fails()){
            return response($validator->messages(), 401);
        }

        try {
            $ContactUs = ContactUs::create([
                'nombres' => $request->nombres,
                'apellidos' => $request->apellidos,
                'email' => $request->email,
                'sitio_votacion' => json_encode($request->sitio_votacion),
                'celular' => $request->celular,
                'terminos' => $request->terminos,
            ]);

            return response()->json([
                'status' => true,
                'ok' => 'Registro Guardado  ',
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message'=> 'Hubo un error inesperado.' . $th
            ],400);
        }


    }


public function twitter(): JsonResponse
{
    $userId = 14620824;
	$params = [
		'place.fields' => 'country,name',
		TwitterContract::KEY_RESPONSE_FORMAT => TwitterContract::RESPONSE_FORMAT_JSON,
	];

	return JsonResponse::fromJsonString(Twitter::userTweets($userId, $params));
}

    public function selectContacts(){
        $contacts = ContactUs::select('nombres', 'apellidos','email')->get();
        return response()->json(compact('contacts'),200);

    }
    public function massiveEmails(Request $request){

        $details = [
            'title' => $request->title,
            'content' => $request->content,
            'contacts' => $request->contacts
        ];

        emailMassive::dispatch($details);


        return response()->json([
            'status' => true,
            'message'=> 'ok'
        ],200);

    }
    public function smsconfirmation(Request $request){


        $receiverNumber = "+573054375375";
        $message = "All About Laravel";

        $sid = getenv("TWILIO_ACCOUNT_SID");
        $token = getenv("TWILIO_AUTH_TOKEN");
        //$twilio = new Client($sid, $token);
        try {
            $message = $twilio->messages
            ->create("+573054375375", // to
                     [
                         "body" => "This will be the body of the new message!",
                         "from" => "+15017122661"
                     ]
            );
            return response()->json([
                'status' => true,
                'message'=>$message->sid
            ],200);

        } catch (Exception $e) {

            return response()->json([
                'status' => false,
                'message'=> ".".$e->getMessage()
            ],400);

        }
    }
    public function sitios_votacion(){

        $sitios_votacion = DB::table('sitios_votacion')->get();
        return response()->json(compact('sitios_votacion'),200);

    }
}
